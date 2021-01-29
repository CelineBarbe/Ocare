import { connect } from 'react-redux';

import Tour from 'src/components/Tour';
import { getTour, updateTourDone, updateTourDoneOK, changeDate } from 'src/actions/tour';

const mapStateToProps = ({ tournee, auth }) => {
  const { list, isLoading } = tournee;
  const {default_cabinet} = auth;

  return ({
    list,
    isLoading,
    default_cabinet,
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
