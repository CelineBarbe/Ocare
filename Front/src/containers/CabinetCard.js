import { connect } from 'react-redux';

import CabinetCard from 'src/components/CabinetCard';

import {updateCabinet, cabChangeFieldUpdate} from 'src/actions/cabinets';

const mapStateToProps = ({ cabinets }) => {
  const {id,name,address,zip_code,city,phone_number, nbpatients, email} = cabinets;
  return ({
    id,
    name,
    address,
    zip_code,
    city,
    phone_number,
    nbpatients,
    email,
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
export default connect(mapStateToProps, mapDispatchToProps)(CabinetCard);
