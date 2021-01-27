import { connect } from 'react-redux';

import { getPatients } from 'src/actions/patients';
import { changeField } from 'src/actions/search';

import AddPatientModal from 'src/modal/AddPatientModal';

const mapStateToProps = ({ patients, search }, ownProps) => {

  const { closeModalAddPatient } = ownProps;
  const { list } = patients;
  const { inputSearchPatient } = search;
  return ({
    closeModalAddPatient,
    list,
    inputSearchPatient,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(changeField(value, field));
  },
  getPatients: () => {
    dispatch(getPatients());
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(AddPatientModal);
