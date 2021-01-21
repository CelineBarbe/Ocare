import { connect } from 'react-redux';

//import { dashboardInit } from 'src/actions/auth';
import StaffCard from 'src/components/StaffCard';

const mapStateToProps = ({ cabinets }) => {
  const {staff} = cabinets;
  return ({
  staff,
  });
};

const mapDispatchToProps = () => ({
 //

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(StaffCard);
