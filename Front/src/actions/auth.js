import {
  AUTH_CHANGE_FIELD, AUTH_SUBMIT_LOGIN, LOGIN_OK,
} from './types';

export const changeField = (value, field) => ({
  type: AUTH_CHANGE_FIELD,
  payload: { [field]: value },
});

export const onSubmitLogin = () => ({
  type: AUTH_SUBMIT_LOGIN,
});

export const loginOk = () => ({
  type: LOGIN_OK,
});
