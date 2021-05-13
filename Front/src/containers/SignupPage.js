/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import { authChangeField, onSubmitSignup } from 'src/actions/auth';
import SignupPage from 'src/components/SignupPage';

const mapStateToProps = ({ auth }) => {
  const {
    email, password, phone_number, lastname, firstname, siren_code, isSigned
  } = auth;
  return ({
    email,
    password,
    phone_number,
    lastname,
    firstname,
    siren_code,
    isSigned,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(authChangeField(value, field));
  },
  handleSignup: () => {
    dispatch(onSubmitSignup());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(SignupPage);
