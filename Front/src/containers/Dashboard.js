import { connect } from 'react-redux';

import { dashboardInit } from 'src/actions/auth';
import Dashboard from 'src/components/Dashboard';

const mapStateToProps = ({ auth, cabinets }) => {
  const {
    email, firstname, lastname, phone_number, siren_code, avatar, default_cabinet
  } = auth;
  const {isLoading} = cabinets
  return ({
    email,
    firstname,
    lastname,
    phone_number,
    siren_code,
    avatar,
    default_cabinet,
    isLoading,
  });
};

const mapDispatchToProps = (dispatch) => ({
  dashboardInit: () => {
    dispatch(dashboardInit());
  },

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
