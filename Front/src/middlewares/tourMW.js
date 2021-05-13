import axios from 'axios';

import { CREATE_TOUR, GET_TOUR, SUBMIT_UPDATE_TOUR, UPDATE_TOUR_DONE, DELETE_TOUR_PATIENT } from 'src/actions/types';
import { seedTour, deleteTourPatientDone } from 'src/actions/tour';
import { success, error, close, notify } from 'src/actions/notification';


const URL = "https://ocare.herokuapp.com/";

const tourMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;

  /*******************************/
   /* ACTION CREATE TOUR */
  /*******************************/

  if (action.type === CREATE_TOUR) {
    const { tour_date } = Recupstore.tournee;
    const { id } = Recupstore.auth;
    console.log('passe par CREATE TOUR');
    console.log('date de la tournée:', tour_date,"default cabinet", default_cabinet, "id user",id);

    const config = {
      method: 'post',
      url: `${URL}tour/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        date:tour_date,
        information: null,
        nurse_id: id,
        cabinet_id: default_cabinet
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log('tournée créé');
         store.dispatch(notify("Tournée créé"))
         store.dispatch(seedTour(response.data.createTour));
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect."))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  };

  /*******************************/
   /* ACTION GET TOUR */
  /*******************************/

  if (action.type === GET_TOUR) {
    const { date } = Recupstore.tournee;
    console.log('passe par GET TOUR');
    console.log('date de la tournée:', date);
    const config = {
      method: 'get',
      url: `${URL}tour/${date}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         store.dispatch(seedTour(response.data.tour));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };

  /*******************************/
   /* ACTION UPDATE TOUR */
  /*******************************/
  if (action.type === SUBMIT_UPDATE_TOUR) {
    const { date, list } = Recupstore.tournee;
    console.log('passe par UPDATE TOUR');
    console.log('date de la tournée:', date);
    console.log('list:', list);
    const config = {
      method: 'patch',
      url: `${URL}tour/patient`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        tour: list,
      }
    };
   axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         //store.dispatch(seedTour(response.data.tour));
         store.dispatch(notify("Modification de la tournée validée"))
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  }; 


  /*******************************/
   /* ACTION UPDATE TOUR DONE!*/
  /*******************************/
  if (action.type === UPDATE_TOUR_DONE) {

    console.log('passe par UPDATE TOUR DONE !');
    console.log('action idLog:',action.idLog)
    const config = {
      method: 'patch',
      url: `${URL}tour/log/${action.idLog}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
        };
   axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("updated task done!")
         store.dispatch(notify("Patient sortie de la liste"))
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  }; 
   /*******************************/
   /* ACTION DELETE TOUR PATIENT */
  /*******************************/
  if (action.type === DELETE_TOUR_PATIENT) {
    const { list } = Recupstore.tournee;
    console.log('passe par DELETE TOUR PATIENT !');
    console.log('action idTour:',action.idTourPatient);
    console.log('action idLog:',action.idLog)

    const config = {
      method: 'delete',
      url: `${URL}tour/${action.idTourPatient}/log/${action.idLog}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
        };
   axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("delete patient tour done!")
         store.dispatch(notify("Patient supprimé de la tournée"))
         store.dispatch(deleteTourPatientDone(action.idLog, list))
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        console.log(err);
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
      });
    next(action);
  }; 
  next(action);
}

export default tourMW;
