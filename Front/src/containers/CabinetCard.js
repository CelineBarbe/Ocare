import { connect } from 'react-redux';

import CabinetCard from 'src/components/CabinetCard';

import {updateCabinet, cabChangeFieldUpdate} from 'src/actions/cabinets';

const mapStateToProps = ({ cabinets, auth }) => {
  const {id,name,address,zip_code,city,phone_number, nbpatients, email, pin_code,newEntryMail, owner_id} = cabinets;
  const {id:idUser} = auth;
  return ({
    id,
    name,
    address,
    zip_code,
    city,
    phone_number,
    nbpatients,
    email,
    owner_id,
    idUser,
  });
};

const mapDispatchToProps = (dispatch) => ({

})

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetCard);
