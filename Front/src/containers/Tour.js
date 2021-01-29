import { connect } from 'react-redux';

import Tour from 'src/components/Tour';
import { getTour, updateTourDone, updateTourDoneOK, changeDate } from 'src/actions/tour';

const mapStateToProps = ({ tournee }) => {
  const { list, isLoading } = tournee;

  return ({
    list,
    isLoading
  });
};

const mapDispatchToProps = (dispatch) => ({
   getTour: () => {
     dispatch(getTour());
   },
   updateTourDone : (id) => {
     dispatch(updateTourDone(id));
   },
   updateTourDoneOk: () => {
     dispatch(updateTourDoneOK());
   },
   changeDate: (date) => {
     dispatch(changeDate(date))
   }
});

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(Tour);
