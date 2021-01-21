import { connect } from 'react-redux';

//import { dashboardInit } from 'src/actions/auth';
import CabinetPage from 'src/components/CabinetPage';

const mapStateToProps = ({ cabinets }) => {
  const {id,name,address,zip_code,city,phone_number,staff} = cabinets;
  return ({
    id,
    name,
    address,
    zip_code,
    city,
    phone_number,
    staff,
  });
};

const mapDispatchToProps = () => ({
 //

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetPage);
