/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

//import { authChangeField, onSubmitLogin } from 'src/actions/auth';
import Header from 'src/components/Header';

const mapStateToProps = ({ auth, cabinets }) => {
  const {
    firstname, lastname, isLogged, avatar
  } = auth;
  const listCabinets = cabinets.list;
  return ({
    firstname,
    lastname,
    isLogged,
    avatar,
    listCabinets,
  });
};

const mapDispatchToProps = (dispatch) => ({

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Header);
