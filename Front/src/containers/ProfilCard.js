import { connect } from 'react-redux';

import { logOut, authChangeField } from 'src/actions/auth';
import { open } from 'src/actions/notification';
import ProfilCard from 'src/components/ProfilCard';

const mapStateToProps = ({ auth }) => {
  const {
    email, firstname, lastname, phone_number, siren_code, avatar,
  } = auth;
  return ({
    email,
    firstname,
    lastname,
    phone_number,
    siren_code,
    avatar,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(authChangeField(value, field));
  },
  logOut: () => {
    dispatch(logOut());
  },
  openModalNotification: () => {
    dispatch(open());
  },

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(ProfilCard);
