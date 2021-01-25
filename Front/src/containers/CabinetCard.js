import { connect } from 'react-redux';

import CabinetCard from 'src/components/CabinetCard';

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

})

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(CabinetCard);
