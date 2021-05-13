import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TourPage from 'src/components/TourPage';
import { changeDate, getTour, updateTour, submitUpdateTour,deleteTourPatient } from 'src/actions/tour';

const mapStateToProps = ({ tournee }, ownProps) => {
  const { date, tour_date, list, isLoading} = tournee;
  //const {byDate} = ownProps
  return ({
    date,
    tour_date,
    list,
    isLoading,
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
    dispatch(submitUpdateTour())
  },
  deleteTourPatient: (idTourPatient, idLog) => {
    dispatch(deleteTourPatient(idTourPatient,idLog))
  }
});

// appel a connect et export
const container =  connect(mapStateToProps, mapDispatchToProps)(TourPage);

const containerWithRouter = withRouter(container);

export default containerWithRouter;
