/* eslint-disable no-console */
import axios from 'axios';
import { AUTH_SUBMIT_LOGIN, AUTH_SUBMIT_SIGNUP } from 'src/actions/types';
import { loginOk, signUpOk} from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
  //LOGIN
  if (action.type === AUTH_SUBMIT_LOGIN) {
    const Recupstore = store.getState();
    const { email, password } = Recupstore.auth;
    console.log('passe par mw auth, email vaut', email);
    console.log('passe par mw auth, password vaut', password);
    const config = {
      method: 'post',
      url: 'http://localhost:5001/login',
      data: {
        email,
        password,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          const { data } = response;
          console.log(data);
          store.dispatch(loginOk());
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
    const { email, password, firstName, lastName, phoneNumber, SIRENCode } = Recupstore.auth;
    console.log('passe par mw auth signup, email vaut', email);
    console.log('passe par mw auth signup, password vaut', password);
    const config = {
      method: 'post',
      url: 'http://localhost:5001/signUP',
      data: {
        email,
        password,
        firstName,
        lastName,
        phoneNumber,
        SIRENCode,
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
