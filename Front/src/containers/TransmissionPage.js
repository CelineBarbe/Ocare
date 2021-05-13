import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TransmissionPage from 'src/components/TransmissionPage';
import { getLogs, getLogsByDate } from 'src/actions/logs';

const mapStateToProps = ({ logBook }, ownProps) => {
  const { list, isLoading} = logBook;
  const {byDate} = ownProps
  return ({
    list,
    isLoading,
    byDate,
  });
};

const mapDispatchToProps = (dispatch) => ({
  getLogs: () => {
    dispatch(getLogs());
  },
  getLogsByDate: (date) => {
    dispatch(getLogsByDate(date));
  },
});

// appel a connect et export
const container =  connect(mapStateToProps, mapDispatchToProps)(TransmissionPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
