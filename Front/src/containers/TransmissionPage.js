import { connect } from 'react-redux';

import TransmissionPage from 'src/components/TransmissionPage';
import { getLogs } from 'src/actions/logs';

const mapStateToProps = ({ logBook }) => {
  const { list, isLoading} = logBook;
  return ({
    list,
    isLoading,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getLogs: () => {
    dispatch(getLogs());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(TransmissionPage);
