import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TourPage from 'src/components/TourPage';
import { changeDate, getTour, updateTour } from 'src/actions/tour';

const mapStateToProps = ({ tournee }, ownProps) => {
  const { date, tour_date, list} = tournee;
  //const {byDate} = ownProps
  return ({
    date,
    tour_date,
    list,
  });
};

const mapDispatchToProps = (dispatch) => ({
   changeDate: (date) => {
    dispatch(changeDate(date));
  },
  getTour: () => {
    dispatch(getTour());
  },
  updateTour: (newList) => {
    dispatch(updateTour(newList))
  }
});

// appel a connect et export
const container =  connect(mapStateToProps, mapDispatchToProps)(TourPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
