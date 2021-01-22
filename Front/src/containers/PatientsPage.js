import { connect } from 'react-redux';

import PatientsPage from 'src/components/PatientsPage';
import { getPatients } from 'src/actions/patients';

const mapStateToProps = ({ patients }) => {
  const { list } = patients;
  return ({
    list
  });
};

const mapDispatchToProps = (dispatch) => ({
  getPatients: () => {
    dispatch(getPatients());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(PatientsPage);
