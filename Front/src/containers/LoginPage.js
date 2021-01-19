/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import { authChangeField, onSubmitLogin } from 'src/actions/auth';
import LoginPage from 'src/components/LoginPage';

const mapStateToProps = ({ auth }) => {
  const {
    email, password, isLogged
  } = auth;
  return ({
    email,
    password,
    isLogged,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(authChangeField(value, field));
  },
  handleLogin: () => {
    dispatch(onSubmitLogin());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
