/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

//import { authChangeField, onSubmitLogin } from 'src/actions/auth';
import Header from 'src/components/Header';
import {changeCabinet} from 'src/actions/cabinets';

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
  changeCabinet: (idCabinet) => {
    dispatch(changeCabinet(idCabinet));
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Header);
