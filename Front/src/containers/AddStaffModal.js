import { connect } from 'react-redux';

import { cabChangeField, subNurseCabinet} from 'src/actions/cabinets';

import AddStaffModal from 'src/modal/AddStaffModal';

const mapStateToProps = ({ auth, cabinets }, ownProps) => {
  const {newEntryMail, newEntryPin_code} =  cabinets;
  const { closeModalAddStaff } = ownProps;
  return ({
    newEntryMail,
    newEntryPin_code,
    closeModalAddStaff,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(cabChangeField(value, field));
  },
  subNurseCabinet: (id) => {
    dispatch(subNurseCabinet(id));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(AddStaffModal);
