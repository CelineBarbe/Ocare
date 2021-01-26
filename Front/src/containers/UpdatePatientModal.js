import { connect } from 'react-redux';

import { patientChangeField, updatePatient  } from 'src/actions/patients';

import UpdatePatientModal from 'src/modal/UpdatePatientModal';

const mapStateToProps = ({patients}, ownProps) => {

  const { firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking } = patients;
  const { closeModalUpdate } = ownProps;
  return ({
    firstname,
    lastname, 
    birthdate, 
    gender, 
    address, 
    zip_code, 
    city, 
    phone_number, 
    pathology, 
    daily_checking,
    closeModalUpdate,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(patientChangeField(value, field));
  },
  handleUpdatePatient: (id) => {
    dispatch(updatePatient(id));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(UpdatePatientModal);
