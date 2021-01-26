import { connect } from 'react-redux';

import { authChangeField, updateProfil} from 'src/actions/auth';

import EditProfilModal from 'src/modal/EditProfilModal';

const mapStateToProps = ({ auth }, ownProps) => {

  const { id, email, firstname, lastname, phone_number, siren_code } = auth;
  const { closeModalEditProfil } = ownProps;
  return ({
    closeModalEditProfil,
    id,
    email, 
    firstname, 
    lastname, 
    phone_number, 
    siren_code
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
export default connect(mapStateToProps,mapDispatchToProps)(EditProfilModal);
