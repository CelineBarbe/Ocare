import axios from 'axios';
import { GET_LOGS, CREATE_LOG} from 'src/actions/types';
import { seedLogs } from 'src/actions/logs';

const URL = "https://ocare.herokuapp.com/";

const logsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet, id } = Recupstore.auth;
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
  
  if (action.type === CREATE_LOG) {
    const { planned_date, ending_date, observations, daily, done } = Recupstore.logBook;
    console.log('passe par create Log');
    console.log(planned_date, ending_date, observations, daily, done, default_cabinet)
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
        daily,
        done,
        cabinet_id: default_cabinet,
        nurse_id: id,
        patient_id: 3,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(createPatientSucceeded(response.data.savedPatient.id));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }; 
  next(action);
}

export default logsMW;


