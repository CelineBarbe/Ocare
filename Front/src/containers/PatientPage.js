import { connect } from 'react-redux';

import PatientPage from 'src/components/PatientPage';

import {getPatient} from 'src/actions/patients.js';
import {createLog} from 'src/actions/logs'

const mapStateToProps = ({ patients }) => {
  const { 
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
      number_dailychecking,
      isLoading,} = patients;
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
    number_dailychecking,
    isLoading,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getPatient: (id) => {
    dispatch(getPatient(id));
  },
  createLog: (id) => {
    dispatch(createLog(id));
  },
  handleChangeLog: (value, field) => {
    dispatch(logbookChangeField(value, field));
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
