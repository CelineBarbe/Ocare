import {
  AUTH_CHANGE_FIELD, AUTH_SUBMIT_LOGIN, LOGIN_OK, AUTH_SUBMIT_SIGNUP, SIGNUP_OK
} from './types';

export const authChangeField = (value, field) => ({
  type: AUTH_CHANGE_FIELD,
  payload: { [field]: value },
});

export const onSubmitLogin = () => ({
  type: AUTH_SUBMIT_LOGIN,
});

export const onSubmitSignup = () => ({
  type: AUTH_SUBMIT_SIGNUP,
});

export const loginOk = () => ({
  type: LOGIN_OK,
});

export const signUpOk = () => ({
  type: SIGNUP_OK,
});
