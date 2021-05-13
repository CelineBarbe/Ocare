import { connect } from 'react-redux';

import { unSubNurse } from 'src/actions/auth';

import StaffCard from 'src/components/StaffCard';

const mapStateToProps = ({ cabinets, auth }) => {
  const {staff, owner_id} = cabinets;
  const {id:idUser} = auth
  return ({
  staff,
  owner_id,
  idUser,
  });
};

const mapDispatchToProps = (dispatch) => ({
  handleunSubNurse: (id) => {
    console.log("Id cabinet dans cabinet container", id);
    dispatch(unSubNurse(id));
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(StaffCard);
