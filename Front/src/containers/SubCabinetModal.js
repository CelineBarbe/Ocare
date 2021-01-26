import { connect } from 'react-redux';

import { cabChangeField, subCabinet} from 'src/actions/cabinets';

import SubCabinetModal from 'src/modal/SubCabinetModal';

const mapStateToProps = ({cabinets, auth}, ownProps) => {

  const { name, pin_code } = cabinets;
  const { id } = auth;
  const { closeModalSubCabinet } = ownProps;
  return ({
    closeModalSubCabinet,
    name,
    pin_code,
    id
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(cabChangeField(value, field));
  },
  handleSubCabinet: (id) => {
    dispatch(subCabinet(id));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(SubCabinetModal);
