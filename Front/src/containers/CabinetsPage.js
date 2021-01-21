import { connect } from 'react-redux';

//import { dashboardInit } from 'src/actions/auth';
import CabinetsPage from 'src/components/CabinetsPage';

const mapStateToProps = ({ cabinets }) => {
  const listCabinets = cabinets.list;
  return ({
    listCabinets,
  });
};

const mapDispatchToProps = () => ({
 //

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetsPage);
