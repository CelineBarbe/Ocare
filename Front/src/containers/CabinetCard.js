import { connect } from 'react-redux';

//import { dashboardInit } from 'src/actions/auth';
import CabinetCard from 'src/components/CabinetCard';

const mapStateToProps = ({ cabinets }) => {
  const {id,name,address,zip_code,city,phone_number, nbPatients} = cabinets;
  return ({
    id,
    name,
    address,
    zip_code,
    city,
    phone_number,
    nbPatients,
  });
};

const mapDispatchToProps = () => ({
 //

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetCard);
