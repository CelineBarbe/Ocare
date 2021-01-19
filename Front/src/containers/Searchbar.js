/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import { changeField, onSubmit } from 'src/actions/search';
import Searchbar from 'src/components/Searchbar';

const mapStateToProps = ({ search }) => {
  const {
    inputSearchDashboard
  } = search;
  return ({
    inputSearchDashboard,
  });
};

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(changeField(value, field));
  },
  handleSubmit: () => {
    dispatch(onSubmit());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);
