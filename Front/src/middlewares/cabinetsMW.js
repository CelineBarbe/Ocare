
import axios from 'axios';
import { CREATE_CABINET } from 'src/actions/types';
import { createCabinetSucceeded } from 'src/actions/cabinets'; 

const URL = "https://ocare.herokuapp.com/";

const patientsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  if (action.type === CREATE_CABINET) {
    console.log('passe par CREATE cabinet');
    const {cabinets, auth} = store.getState();
    const {name, address,zip_code,city, phone_number, pin_code} = cabinets;
    const {id, email} = auth;
    console.log(name, id, zip_code);
    const config = {
      method: 'post',
      url: `${URL}cabinet`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        name,
        address,
        zip_code,
        city,
        phone_number,
        pin_code,
        owner_id: id,
      }

    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(createCabinetSucceeded(response.data, email));
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
