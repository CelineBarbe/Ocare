import { connect } from 'react-redux';

import { dashboardInit } from 'src/actions/auth';
import Dashboard from 'src/components/Dashboard';

const mapStateToProps = ({ auth }) => {
  const {
    email, firstname, lastname, phone_number, siren_code, avatar, default_cabinet
  } = auth;
  return ({
    email,
    firstname,
    lastname,
    phone_number,
    siren_code,
    avatar,
    default_cabinet,
  });
};

const mapDispatchToProps = (dispatch) => ({
  dashboardInit: () => {
    dispatch(dashboardInit());
  },

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
