import { connect } from 'react-redux';

import UpdateCabinetModal from 'src/modal/UpdateCabinetModal';

import {updateCabinet, cabChangeFieldUpdate} from 'src/actions/cabinets';

const mapStateToProps = ({ cabinets }, ownProps) => {
  const {id,name,address,zip_code,city,phone_number, nbpatients, email, pin_code,newEntryMail} = cabinets;
  const {handleModal} = ownProps
  return ({
    id,
    name,
    address,
    zip_code,
    city,
    phone_number,
    nbpatients,
    email,
    newEntryMail,
    handleModal,
  });
};

const mapDispatchToProps = (dispatch) => ({
  handleSubmitUpdate: () => {
    dispatch(updateCabinet());
  },
  changeFieldUpdate:(field,value) => {
    dispatch(cabChangeFieldUpdate(field,value))
  }
})

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(UpdateCabinetModal);
