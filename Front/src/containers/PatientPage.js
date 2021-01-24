import { connect } from 'react-redux';

import PatientPage from 'src/components/PatientPage';

import {getPatient} from 'src/actions/patients.js';

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
      number_dailychecking,} = patients;
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
  });
};

const mapDispatchToProps = (dispatch) => ({
  getPatient: (id) => {
    dispatch(getPatient(id));
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
