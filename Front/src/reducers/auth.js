/* eslint-disable import/no-unresolved */
import { AUTH_CHANGE_FIELD, LOGIN_OK, SIGNUP_OK, CHANGE_CABINET, CREATE_CABINET_SUCCEEDED } from 'src/actions/types';

export const initialState = {
  id: null,
  email: '',
  password: '',
  token: undefined,
  isLogged: false,
  isSigned: false,
  avatar: '',
  firstname: '',
  lastname: '',
  phone_number: '',
  siren_code: '',
  default_cabinet: null,
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
        avatar: action.avatar,
        default_cabinet: action.default_cabinet,
      };
    case SIGNUP_OK:
      return {
        ...oldState,
        isSigned: true,
        password:'',
      }
    case CHANGE_CABINET:
      return {
        ...oldState,
        default_cabinet: action.idCab,
      }
    case CREATE_CABINET_SUCCEEDED:
      return {
        ...oldState,
        default_cabinet: action.data.id,
      }
    default:
      return { ...oldState };
  }
};

export default reducer;
