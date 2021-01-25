import {
  AUTH_CHANGE_FIELD, AUTH_SUBMIT_LOGIN, LOGIN_OK, AUTH_SUBMIT_SIGNUP, SIGNUP_OK, INIT_DASHBOARD, LOGOUT
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

export const loginOk = ({email,password,id,firstname,lastname, phone_number, siren_code, avatar, default_cabinet}) => ({
  type: LOGIN_OK,
  email,
  password,
  id,
  firstname,
  lastname,
  phone_number,
  siren_code,
  avatar,
  default_cabinet,
});

export const signUpOk = () => ({
  type: SIGNUP_OK,
});

export const dashboardInit = () => ({
  type: INIT_DASHBOARD,
})

export const logOut = () => ({
  type: LOGOUT,
})
