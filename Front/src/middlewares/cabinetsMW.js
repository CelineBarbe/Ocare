
import axios from 'axios';
import { CREATE_CABINET } from 'src/actions/types';
import { createCabinetSucceeded, changeCabinet } from 'src/actions/cabinets'; 

const URL = "https://ocare.herokuapp.com/";

const patientsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  if (action.type === CREATE_CABINET) {
    console.log('passe par CREATE cabinet');
    const {cabinets, auth} = store.getState();
    const {newEntryName, newEntryAddress,newEntryZip_code,newEntryCity, newEntryPhone_number, newEntryPin_code} = cabinets;
    const {id, email} = auth;
    console.log(newEntryName, id, newEntryName, newEntryAddress,newEntryZip_code,newEntryCity, newEntryPhone_number, newEntryPin_code);
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
          console.log('response id', response.data.savedCabinet.id);
          store.dispatch(changeCabinet(response.data.savedCabinet.id));
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
