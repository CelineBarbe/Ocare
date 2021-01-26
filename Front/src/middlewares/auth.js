/* eslint-disable no-console */
import axios from 'axios';
import { AUTH_SUBMIT_LOGIN, AUTH_SUBMIT_SIGNUP, LOGOUT, UPDATE_PROFIL } from 'src/actions/types';
import { loginOk, signUpOk, dashboardInit} from 'src/actions/auth';
const URL = "https://ocare.herokuapp.com/"

const auth = (store) => (next) => (action) => {
  //LOGIN
  if (action.type === AUTH_SUBMIT_LOGIN) {
    const Recupstore = store.getState();
    const { email, password } = Recupstore.auth;
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
        console.log(err);
      });
    
    next(action);
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
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }
// UPDATE
  if (action.type === UPDATE_PROFIL) {
    console.log("Passe par Update profil");
    const Recupstore = store.getState();
    const { email, firstname, lastname, phone_number, siren_code } = Recupstore.auth;
    const { id } = action;
    console.log("Infos dans update profil middleware:", "ID:", id, "la suite", email, firstname, lastname, phone_number, siren_code)
    const config = {
      method: 'patch',
      url: `${URL}nurse/${id}`,
      data: {
        email,
        firstname,
        lastname,
        phone_number,
        siren_code,
        avatar:'en dur'
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
         console.log("UPDATE PROFIL DONE");
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }

  //LOGOUT
  if (action.type === LOGOUT) {
    console.log("passe par logout");
    const Recupstore = store.getState();
    const config = {
      method: 'post',
      url: `${URL}logout`,
    
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          //console.log(data);
          //store.dispatch(signUpOk());
        }
      })
      .catch((err) => {
        console.log(err);
      });
    next(action);
  }
  next(action);
};

export default auth;
