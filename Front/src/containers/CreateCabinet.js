import { connect } from 'react-redux';

import { cabChangeField, createCabinet, preCreateCabinet} from 'src/actions/cabinets';
import CreateCabinet from 'src/components/CreateCabinet';

const mapStateToProps = ({ cabinets }) => {
  const {
    name, address, zip_code, city, phone_number, pin_code, isCreated
  } = cabinets;
  return ({
    name,
    address,
    zip_code,
    city,
    phone_number,
    pin_code,
    isCreated
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(cabChangeField(value, field));
  },
  handleSubmitCab: () => {
    dispatch(createCabinet());
  },
  handleReset: () => {
    dispatch(preCreateCabinet());
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CreateCabinet);
