
import axios from 'axios';
import { CREATE_CABINET, SUB_CABINET, UNSUB_CABINET, UPDATE_CABINET, SUB_NURSE_CABINET, UNSUB_NURSE_CABINET } from 'src/actions/types';
import { createCabinetSucceeded, subNurseCabinetOK, changeCabinet, subCabinet, subCabinetOK, unSubCabinetOK } from 'src/actions/cabinets'; 
import { success, error, close, notify } from 'src/actions/notification';

const URL = "http://localhost:3000/";

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
          store.dispatch(notify("Votre cabinet est bien créé "))
          store.dispatch(createCabinetSucceeded(response.data.savedCabinet, email));
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect."))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
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
         store.dispatch(notify("Inscription au cabinet autorisé"));
         store.dispatch(subCabinetOK(response.data.savedNurseToCabinet));
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : vous ne pouvez pas rejoindre ce cabinet"))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
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
    const { list } = Recupstore.cabinets;
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
         store.dispatch(notify("Utilisateur désinscrit du cabinet"))
         store.dispatch(unSubCabinetOK(cabinetId, list))
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify(""))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
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
          store.dispatch(notify("Modification enregistré"))
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : un des champs est incorrect."))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
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
          store.dispatch(notify("Infirmier ajouté au cabinet"))
          store.dispatch(subNurseCabinetOK(response.data.addNurseToCabinet))
          
        }
      })
      .catch((err) => {
        store.dispatch(notify("Erreur : ajout de cet infirmier impossible"))
        console.log(err);
      }); 
    next(action);
  };
  
  next(action);
}

export default cabinetsMW;
