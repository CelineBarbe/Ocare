import { connect } from 'react-redux';

import { unSubcabChangeField, unSubCabinet, changeCabinet} from 'src/actions/cabinets';
import {dashboardInit} from 'src/actions/auth';

import CabinetsPage from 'src/components/CabinetsPage';

const mapStateToProps = ({ cabinets, auth }) => {
  const {id: idUser} = auth;
  const listCabinets = cabinets.list;
  return ({
    listCabinets,
    idUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
 
  handleunSubCabinet: (id) => {
    console.log("Id cabinet dans cabinet container", id);
    dispatch(unSubCabinet(id));
  },
  handleRefresh: () => {
    dispatch(dashboardInit())
  },
  changeCabinet: (id) => {
    dispatch(changeCabinet(id));
  }

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetsPage);
