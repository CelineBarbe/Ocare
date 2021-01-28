import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TourPage from 'src/components/TourPage';
import { changeDate, getTour, updateTour, submitUpdateTour } from 'src/actions/tour';

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
  },
  submitUpdateTour: () => {
    console.log("Submit Update Tour container");
    dispatch(submitUpdateTour())
  }
});

// appel a connect et export
const container =  connect(mapStateToProps, mapDispatchToProps)(TourPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
