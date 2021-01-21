/* eslint-disable no-console */
import axios from 'axios';
import { INIT_DASHBOARD } from 'src/actions/types';
import { seedCabinets, seedDefaultCabinet } from 'src/actions/cabinets';
import { findDefaultCabinet } from 'src/utils/searchAndReturn';

const URL = "https://ocare.herokuapp.com/"

const initDashboard = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;
  if (action.type === INIT_DASHBOARD) {
    console.log('passe par initdashboard');
    const config = {
      method: 'get',
      url: `${URL}cabinet`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(seedCabinets(response.data.cabinets));
          store.dispatch(seedDefaultCabinet(findDefaultCabinet(response.data.cabinets, default_cabinet)))
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }
  next(action);
}

export default initDashboard;
