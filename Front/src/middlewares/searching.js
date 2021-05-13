/* eslint-disable no-console */
import axios from 'axios';
import { SEARCH_SUBMIT } from 'src/actions/types';

const searching = (store) => (next) => (action) => {
  if (action.type === SEARCH_SUBMIT) {
    const Recupstore = store.getState();
    const { inputSearchDashboard } = Recupstore.search;
    console.log('passe par mw searching, search vaut', inputSearchDashboard);
    const config = {
      method: 'post',
      url: 'http://localhost:5001/search',
      data: {
        inputSearchDashboard,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          console.log(data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }
  next(action);
}

export default searching;
