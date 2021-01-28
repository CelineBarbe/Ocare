import axios from 'axios';

import { CREATE_TOUR, GET_TOUR, SUBMIT_UPDATE_TOUR, } from 'src/actions/types';
import { seedTour } from 'src/actions/tour';


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
         store.dispatch(seedTour(response.data.createTour));
        }
      })
      .catch((err) => {
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }; 
  next(action);
}

export default tourMW;
