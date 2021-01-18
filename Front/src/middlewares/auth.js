/* eslint-disable no-console */
import axios from 'axios';
import { AUTH_SUBMIT_LOGIN } from 'src/actions/types';
import { loginOk } from 'src/actions/auth';

const auth = (store) => (next) => (action) => {
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
  next(action);
};

export default auth;
