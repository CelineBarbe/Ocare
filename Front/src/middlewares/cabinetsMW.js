
import axios from 'axios';
import { CREATE_CABINET, SUB_CABINET, UNSUB_CABINET, UPDATE_CABINET, SUB_NURSE_CABINET, UNSUB_NURSE_CABINET } from 'src/actions/types';
import { createCabinetSucceeded, changeCabinet, subCabinet } from 'src/actions/cabinets'; 

const URL = "https://ocare.herokuapp.com/";

const cabinetsMW = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');

   /*******************************/
   /* ACTION CREATE CABINET */
  /*******************************/
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
        if(response.status === 200) {
          console.log('coucou du if create cabinet');
          console.log('response.data.savedCabinet', response.data.savedCabinet);
          console.log('response.data.savedCabinet.id', response.data.savedCabinet.id);
          store.dispatch(createCabinetSucceeded(response.data.savedCabinet, email));
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    next(action);
  };

    /*******************************/
    /* ACTION SUBSCRIBE CABINET */
    /*******************************/

  if (action.type === SUB_CABINET) {
    const Recupstore = store.getState();
    const { newEntryName, newEntryPin_code  } = Recupstore.cabinets;
    const {id } = action;
    console.log("passe dans SUB CABINET");
  
    console.log("name:", newEntryName, "pin code:", newEntryPin_code, "ID",id);
    const config = {
      method: 'post',
      url: `${URL}cabinet/addnurse`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        name: newEntryName,
        nurse_id:id,
        pin_code: newEntryPin_code,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("ABONNEMENT DONE");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };

  /*******************************/
  /* ACTION UNSUBSCRIBE CABINET  */
  /*******************************/

  if (action.type === UNSUB_CABINET) {
    const Recupstore = store.getState();
    const { id } = Recupstore.auth;
    const { cabinetId } = action;
    console.log("passe dans UNSUB CABINET");
    console.log("cabinet ID:",cabinetId);
    console.log("nurse id:",id);
  
    const config = {
      method: 'patch',
      url: `${URL}cabinet/unsubscribe`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        cabinet_id:cabinetId,
        nurse_id:id,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("Utilisateur désinscrit du cabinet");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  };

   /*******************************/
   /* ACTION UPDATE CABINET */
  /*******************************/

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
          console.log('cabinet updated!');
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    next(action);
  };
   /*******************************/
   /* ACTION ADD NURSE CABINET */
  /*******************************/
  if (action.type === SUB_NURSE_CABINET) {
    console.log('passe par UPDATE cabinet');
    const {cabinets, auth } = store.getState();
    const {newEntryMail, newEntryPin_code,} = cabinets;
    const {id, default_cabinet} = auth
    const config = {
      method: 'post',
      url: `${URL}cabinet/owner/addnurse`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        email: newEntryMail,
        pin_code: newEntryPin_code,
        nurse_id: id,
        cabinet_id: default_cabinet,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          console.log('cabinet updated!');
          //TODO SEED STAFF ou new getCabinet
        }
      })
      .catch((err) => {
        console.log(err);
      }); 
    next(action);
  };
  
  next(action);
}

export default cabinetsMW;
