import { connect } from 'react-redux';

import Tour from 'src/components/Tour';
import { getTour, updateTourDone, updateTourDoneOK, changeDate } from 'src/actions/tour';

const mapStateToProps = ({ tournee, auth, cabinets }) => {
  const { list, isLoading } = tournee;
  const {default_cabinet} = auth;
  const isLoadingCab = cabinets.isLoading;

  return ({
    list,
    isLoading,
    default_cabinet,
    isLoadingCab,
  });
};

const mapDispatchToProps = (dispatch) => ({
   getTour: () => {
     dispatch(getTour());
   },
   updateTourDone : (id) => {
     dispatch(updateTourDone(id));
   },
   updateTourDoneOk: (list, id) => {
     dispatch(updateTourDoneOK(list, id));
   },
   changeDate: (date) => {
     dispatch(changeDate(date))
   }
});

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(Tour);
