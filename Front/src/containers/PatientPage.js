import { connect } from 'react-redux';

import PatientPage from 'src/components/PatientPage';

const mapStateToProps = ({ patients }) => {
  const { list } = patients;
  return ({
    list
  });
};

const mapDispatchToProps = (dispatch) => ({

});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(PatientPage);
