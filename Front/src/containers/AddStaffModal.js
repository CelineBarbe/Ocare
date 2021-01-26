import { connect } from 'react-redux';

import { authChangeField, updateProfil} from 'src/actions/auth';

import AddStaffModal from 'src/modal/AddStaffModal';

const mapStateToProps = ({ auth }, ownProps) => {

  const { closeModalAddStaff } = ownProps;
  return ({
    closeModalAddStaff,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(authChangeField(value, field));
  },
  handleUpdateProfil: (id) => {
    dispatch(updateProfil(id));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(AddStaffModal);
