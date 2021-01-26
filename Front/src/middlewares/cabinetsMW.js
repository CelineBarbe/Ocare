
import axios from 'axios';
import { CREATE_CABINET, UPDATE_CABINET } from 'src/actions/types';
import { createCabinetSucceeded, changeCabinet, cabinetUpdated } from 'src/actions/cabinets'; 

const URL = "https://ocare.herokuapp.com/";

const patientsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  if (action.type === CREATE_CABINET) {
    console.log('passe par CREATE cabinet');
    const {cabinets, auth} = store.getState();
    const {newEntryName, newEntryAddress,newEntryZip_code,newEntryCity, newEntryPhone_number, newEntryPin_code} = cabinets;
    const {id, email} = auth;
    const config = {
      method: 'post',
      url: `${URL}cabinet`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        name : newEntryName,
        address: newEntryAddress,
        zip_code: newEntryZip_code,
        city: newEntryCity,
        phone_number: newEntryPhone_number,
        pin_code: newEntryPin_code,
        owner_id: id,
      }

    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(createCabinetSucceeded(response.data.savedCabinet, email));
          store.dispatch(changeCabinet(response.data.savedCabinet.id));
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    next(action);
  };
  if (action.type === UPDATE_CABINET) {
    console.log('passe par UPDATE cabinet');
    const {cabinets, auth} = store.getState();
    const {name, address,zip_code,city, phone_number, pin_code} = cabinets;
    const {id, email, default_cabinet} = auth;
    const config = {
      method: 'patch',
      url: `${URL}cabinet/${default_cabinet}`,
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
          store.dispatch(cabinetUpdated(response.data));
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
