import { connect } from 'react-redux';

import { changeCabinet } from 'src/actions/cabinets';
import ListCabinets from 'src/components/ProfilPage/ListCabinets';

const mapStateToProps = ({ cabinets }) => {
  const { list } = cabinets;
  return ({
    list
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeCabinet: (id) => {
  dispatch(changeCabinet(id));
}

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(ListCabinets);
