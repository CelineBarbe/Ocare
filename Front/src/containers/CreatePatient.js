import { connect } from 'react-redux';

import { patientChangeField, createPatient } from 'src/actions/patients';
import CreatePatient from 'src/components/CreatePatient';

const mapStateToProps = ({ patients }) => {
  const {
    firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, isCreated
  } = patients;
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
    number_daily_checking,
    isCreated
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(patientChangeField(value, field));
  },
  handleSubmitPatient: () => {
    dispatch(createPatient());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CreateCabinet);
