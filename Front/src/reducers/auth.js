/* eslint-disable import/no-unresolved */
import { AUTH_CHANGE_FIELD, LOGIN_OK } from 'src/actions/types';

export const initialState = {
  id: null,
  email: '',
  password: '',
  token: undefined,
  isLogged: false,
  avatar: '',
  firstname: '',
  lastname: '',
  phone_number: '',
  siren_code: '',
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case AUTH_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    case LOGIN_OK:
      return {
        ...oldState,
        isLogged: true,
        email: action.email,
        password: action.password,
        id: action.id,
        firstname: action.firstname,
        lastname: action.lastname,
        phone_number: action.phone_number,
        siren_code: action.siren_code,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
