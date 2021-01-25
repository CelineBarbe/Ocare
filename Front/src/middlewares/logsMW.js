import axios from 'axios';
import { GET_LOGS, CREATE_LOG, GET_LOGS_BY_DATE} from 'src/actions/types';
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
    const { planned_date, time, done_date, ending_date, observations, daily, done } = Recupstore.logBook;
    console.log('passe par create Log');
    console.log('planned_date:',planned_date,'ending_date:', ending_date,'observations:', observations, 'daily:',daily,'done:', done, 'default cabinet:',default_cabinet, 'time:',time, 'done date',done_date)
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
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedLogs(response.data));
          console.log("New care data:",response.data)
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };
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
          store.dispatch(seedLogs(response.data));
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


