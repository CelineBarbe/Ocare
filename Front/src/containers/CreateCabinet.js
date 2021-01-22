import { connect } from 'react-redux';

import { cabChangeField, createCabinet } from 'src/actions/cabinets';
import CreateCabinet from 'src/components/CreateCabinet';

const mapStateToProps = ({ cabinets }) => {
  const {
    newEntryName, newEntryAddress, newEntryZip_code, newEntryCity, newEntryPhone_number, newEntryPin_code, isCreated
  } = cabinets;
  return ({
    newEntryName,
    newEntryAddress,
    newEntryZip_code,
    newEntryCity,
    newEntryPhone_number,
    newEntryPin_code,
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
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CreateCabinet);
