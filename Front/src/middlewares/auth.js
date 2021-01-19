/* eslint-disable no-console */
import axios from 'axios';
import { AUTH_SUBMIT_LOGIN, AUTH_SUBMIT_SIGNUP } from 'src/actions/types';
import { loginOk, signUpOk} from 'src/actions/auth';
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
          const { data } = response.data;
          console.log(data);
          store.dispatch(loginOk(data));
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
          console.log(data);
          store.dispatch(signUpOk());
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
