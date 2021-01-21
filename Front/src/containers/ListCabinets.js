import { connect } from 'react-redux';

//import { dashboardInit } from 'src/actions/auth';
import ListCabinets from 'src/components/ProfilPage/ListCabinets';

const mapStateToProps = ({ cabinets }) => {
  const { list } = cabinets;
  return ({
    list
  });
};

const mapDispatchToProps = () => ({
 //

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(ListCabinets);
