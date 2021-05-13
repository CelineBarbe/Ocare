/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import { changeField, onSubmit } from 'src/actions/search';
import { getPatients } from 'src/actions/patients';
import Searchbar from 'src/components/Searchbar';


const mapStateToProps = ({ patients, search }) => {
  const {inputSearchDashboard} = search;
  const { list } = patients;
  return ({
    inputSearchDashboard,
    list
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(changeField(value, field));
  },
  onSubmit: () => {
    dispatch(onSubmit());
  },
  getPatients:() => {
    dispatch(getPatients());
  }
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
