/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

//import { authChangeField, onSubmitLogin } from 'src/actions/auth';
import Header from 'src/components/Header';

import {sortCabinets} from 'src/utils/searchAndReturn'

const mapStateToProps = ({ auth, cabinets }) => {
  const {
    firstname, lastname, isLogged, avatar, default_cabinet
  } = auth;
  const listCabinets = cabinets.list;
  const name = cabinets.name
  return ({
    firstname,
    lastname,
    isLogged,
    avatar,
    listCabinets, 
    default_cabinet,
    name,
  });
};

const mapDispatchToProps = (dispatch) => ({

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Header);
