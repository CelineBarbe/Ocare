import axios from 'axios';
import { CREATE_TOUR } from 'src/actions/types';


const URL = "https://ocare.herokuapp.com/";

const tourMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;

  if (action.type === CREATE_TOUR) {
    const { tour_date } = Recupstore.tournee;
    console.log('passe par CREATE TOUR');
    console.log('date de la tournée:', tour_date - "default cabinet", default_cabinet);
    const config = {
      method: 'post',
      url: `${URL}tour/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        tour_date
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log('tournée créé');
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
