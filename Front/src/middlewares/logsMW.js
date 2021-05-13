import axios from 'axios';
import { GET_LOGS, CREATE_LOG, GET_LOGS_BY_DATE, CREATE_LOG_TOUR} from 'src/actions/types';
import { seedLogs, seedLogsByDate } from 'src/actions/logs';
import {updateTourAddPatient, submitUpdateTour} from 'src/actions/tour';
import { success, error, close, notify } from 'src/actions/notification';
const URL = "http://localhost:3000/";

const logsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet, id } = Recupstore.auth;
  const {list} = Recupstore.tournee;

  /*******************************/
   /* ACTION GET LOGS */
  /*******************************/

  if (action.type === GET_LOGS) {
    console.log('passe par get logs');
    const config = {
      method: 'get',
      url: `${URL}logbook`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedLogs(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };
  
    /*******************************/
   /* ACTION CREATE LOG */
  /*******************************/

  if (action.type === CREATE_LOG) {
    const { planned_date, time, done_date, ending_date, observations, daily, done, medical_act_name, picture } = Recupstore.logBook;
    console.log('passe par create Log');
    console.log('acte medical:', medical_act_name);
    console.log('planned_date:',planned_date,'ending_date:', ending_date,'observations:', observations, 'daily:',daily,'done:', done, 'default cabinet:',default_cabinet, 'time:',time, 'done date',done_date, 'picture')
    const { patient_id, nurse_id } = action;
    console.log('patient_id ',patient_id, 'nurse id', nurse_id);
    const config = {
      method: 'post',
      url: `${URL}logbook/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        planned_date,
        ending_date,
        observations,
        time,
        done_date,
        daily,
        done,
        cabinet_id: default_cabinet,
        nurse_id,
        patient_id,
        medical_act_name,
        document: picture,
      }
    };
    axios(config)
      .then((response) => {
        console.log("response",response.data.savedLog);
        if (response.status === 200) {
          store.dispatch(notify("Nouveau soin ajouté"))
          store.dispatch(seedLogs(response.data.savedLog));
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect. "))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  };

    /*******************************/
   /* ACTION GET LOGS BY DATE */
  /*******************************/


  if (action.type === GET_LOGS_BY_DATE) {
    console.log('passe par get logs by date', action.date);
    const config = {
      method: 'post',
      url: `${URL}logbook/date`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        date: action.date,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedLogsByDate(response.data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };

  /*******************************/
   /* ACTION CREATE LOG TOUR */
  /*******************************/


  if (action.type === CREATE_LOG_TOUR) {
    const { planned_date, time, done_date, ending_date, observations, daily, done, medical_act_name } = Recupstore.logBook;
    const { date } = Recupstore.tournee;
    const {list: listpatient} = Recupstore.patients;
    console.log('list patient', listpatient);
    console.log('passe par create Log tour');
    console.log('planned_date:',planned_date,'ending_date:', ending_date,'observations:', observations, 'daily:',daily,'done:', done, 'default cabinet:',default_cabinet, 'time:',time, 'done date',done_date)
    console.log('date:', date)
    const { patient_id, nurse_id } = action;
    console.log('patient_id ',patient_id, 'nurse id', nurse_id);
    const config = {
      method: 'post',
      url: `${URL}logbook/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        planned_date : date,
        ending_date,
        observations,
        time,
        done_date,
        daily,
        done,
        cabinet_id: default_cabinet,
        nurse_id,
        patient_id,
        medical_act_name,
      }
    };
    axios(config)
      .then((response) => {
        console.log("response",response.data.savedLog);
        if (response.status === 200) {
          store.dispatch(notify("Nouveau soin ajouté"));
          store.dispatch(seedLogs(response.data.savedLog));
          store.dispatch(updateTourAddPatient(response.data.savedLog, list, listpatient))
          
            /*store.dispatch(submitUpdateTour())*/
          
          
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect. "))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  };
  next(action);
}

export default logsMW;


