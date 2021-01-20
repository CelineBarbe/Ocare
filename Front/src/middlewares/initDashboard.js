/* eslint-disable no-console */
import axios from 'axios';
import { INIT_DASHBOARD } from 'src/actions/types';
import { seedCabinets } from 'src/actions/cabinets';
const URL = "https://ocare.herokuapp.com/"

const initDashboard = (store) => (next) => (action) => {
  if (action.type === INIT_DASHBOARD) {
    console.log('passe par initdashboard');
    const config = {
      method: 'get',
      url: `${URL}cabinet`,
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log(response);
          store.dispatch(seedCabinets(response.data));
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
