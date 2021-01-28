import { connect } from 'react-redux';

import { unSubcabChangeField, unSubCabinet} from 'src/actions/cabinets';
import {dashboardInit} from 'src/actions/auth';

import CabinetsPage from 'src/components/CabinetsPage';

const mapStateToProps = ({ cabinets }) => {
  const listCabinets = cabinets.list;
  return ({
    listCabinets,
  });
};

const mapDispatchToProps = (dispatch) => ({
 
  handleunSubCabinet: (id) => {
    console.log("Id cabinet dans cabinet container", id);
    dispatch(unSubCabinet(id));
  },
  handleRefresh: () => {
    dispatch(dashboardInit())
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetsPage);
