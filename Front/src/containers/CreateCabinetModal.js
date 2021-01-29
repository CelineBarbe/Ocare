import { connect } from 'react-redux';

import { cabChangeField, createCabinet, changeCabinet } from 'src/actions/cabinets';
import CreateCabinetModal from 'src/modal/CreateCabinetModal';

const mapStateToProps = ({ cabinets }) => {
  const {
    newEntryName, newEntryAddress, newEntryZip_code, newEntryCity, newEntryPhone_number, newEntryPin_code, isCreated, isLoading, id
  } = cabinets;
  return ({
    newEntryName,
    newEntryAddress,
    newEntryZip_code,
    newEntryCity,
    newEntryPhone_number,
    newEntryPin_code,
    isCreated,
    isLoading,
    id
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(cabChangeField(value, field));
  },
  handleSubmitCab: () => {
    dispatch(createCabinet());
  },
  changeCabinet: (id) => {
    dispatch(changeCabinet(id));
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CreateCabinetModal);
