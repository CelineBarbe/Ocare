import axios from 'axios';
import { CREATE_TOUR } from 'src/actions/types';


const URL = "https://ocare.herokuapp.com/";

const tourMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  const Recupstore = store.getState();
  const { default_cabinet } = Recupstore.auth;

  if (action.type === CREATE_TOUR) {
    const { tour_date } = Recupstore.tournee;
    const { id } = Recupstore.auth;
    console.log('passe par CREATE TOUR');
    console.log('date de la tournée:', tour_date ,"default cabinet", default_cabinet, "id user",id);
    const config = {
      method: 'post',
      url: `${URL}tour/`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        date: tour_date,
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
         console.log('response', response);
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
