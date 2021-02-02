/* eslint-disable no-console */
import axios from 'axios';
import { AUTH_SUBMIT_LOGIN, AUTH_SUBMIT_SIGNUP, LOGOUT, UPDATE_PROFIL, UNSUB_NURSE, AUTO_LOGIN } from 'src/actions/types';
import { loginOk, signUpOk, dashboardInit, updateAvatar} from 'src/actions/auth';
import {unSubNurseCabinetOK} from 'src/actions/cabinets';
import { success, error, close, notify } from 'src/actions/notification';
const URL = "https://ocare.herokuapp.com/"

const auth = (store) => (next) => (action) => {
  const tokenStorage = localStorage.getItem('auth');
  
  //LOGIN
  if (action.type === AUTH_SUBMIT_LOGIN) {
    const Recupstore = store.getState();
    const { email, password } = Recupstore.auth;
    const { isLoading } = Recupstore.notification;
    const config = {
      method: 'post',
      url: `${URL}login`,
      data: {
        email,
        password,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { user, userToken } = response.data;
          localStorage.setItem('auth', userToken);
          console.log(user);
          store.dispatch(loginOk(user));
        }
      })
      .catch((err) => {
          store.dispatch(notify("Identifiant ou mot de passe incorrect"))
          store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    
    next(action);
  }
  //AUTOLOGIN
  if (action.type === AUTO_LOGIN) {
    if(tokenStorage){
      const Recupstore = store.getState();
    const { email, password } = Recupstore.auth;
    const config = {
      method: 'get',
      url: `${URL}autologin`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          store.dispatch(loginOk(response.data.user));
        }
      })
      .catch((err) => {
        console.log(err);
      });
      next(action);
    } else {
      console.log("pas de token présent !")
      next(action);
    }
    
  }
  //SIGNUP
  if (action.type === AUTH_SUBMIT_SIGNUP) {
    const Recupstore = store.getState();
    const { email, password, firstname, lastname, phone_number, siren_code } = Recupstore.auth;
    const config = {
      method: 'post',
      url: `${URL}signup`,
      data: {
        email,
        password,
        firstname,
        lastname,
        phone_number,
        siren_code,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          //console.log(data);
          store.dispatch(signUpOk());
          store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  }
// UPDATE
  if (action.type === UPDATE_PROFIL) {
    console.log("Passe par Update profil");
    const Recupstore = store.getState();
    const { email, avatar, firstname, lastname, phone_number, siren_code } = Recupstore.auth;
    const { id, url } = action;
    console.log("Infos dans update profil middleware:", "ID:", id, "la suite", email, firstname, lastname, phone_number, siren_code, avatar)
    console.log("URL DE ACTION:",url);
    const config = {
      method: 'patch',
      url: `${URL}nurse/${id}`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        firstname,
        lastname,
        email,
        phone_number,
        avatar: url,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("UPDATE PROFIL DONE");
         store.dispatch(notify("Profil mis à jour"));
         store.dispatch(updateAvatar(url));
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
  }

  //UNSUB_NURSE 

  if (action.type === UNSUB_NURSE) {
    const Recupstore = store.getState();
    const { id, staff } = Recupstore.cabinets;
    const { nurseId } = action;
    console.log("passe dans UNSUB_NURSE");
    console.log("nurse id:",nurseId);
    console.log("cabinet Id:",id);
  
    const config = {
      method: 'patch',
      url: `${URL}cabinet/unsubscribe`,
      headers: {
        Authorization: `Bearer ${tokenStorage}`,
      },
      data: {
        cabinet_id:id,
        nurse_id:nurseId,
      }
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("Utilisateur désinscrit du cabinet");
         store.dispatch(notify("Utilisateur désinscrit du cabinet"))
         store.dispatch(unSubNurseCabinetOK(nurseId, staff));
         store.dispatch(success());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        }
      })
      .catch((err) => {
        store.dispatch(notify("erreur"))
        store.dispatch(error());
          setTimeout(() => {
            store.dispatch(close());
          }, 3000)
        console.log(err);
      });
    next(action);
  }
  //LOGOUT
  if (action.type === LOGOUT) {
    console.log("passe par logout");
    localStorage.removeItem('auth');
    next(action);
  }
  next(action);
};

export default auth;
