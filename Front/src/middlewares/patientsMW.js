import axios from 'axios';
import { GET_PATIENTS } from 'src/actions/types';
import { seedPatients } from 'src/actions/patients';

const URL = "https://ocare.herokuapp.com/";

const patientsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;
  if (action.type === GET_PATIENTS) {
    console.log('passe par get patients');
    const config = {
      method: 'get',
      url: `${URL}patient`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          //store.dispatch(seedPatients(data));
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };
  next(action);
}

export default patientsMW;
