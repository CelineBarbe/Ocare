import { connect } from 'react-redux';

import { logbookChangeField, createLogTour } from 'src/actions/logs';
import { submitUpdateTour } from 'src/actions/tour';

import TourEntryModal from 'src/modal/TourEntryModal';

const mapStateToProps = ({logBook, auth, tournee}, ownProps) => {
  const { closeModalEntry, patientId, closeModalAddPatient } = ownProps;
  const { planned_date, time, done_date, ending_date, observations, daily, done, tags, isCreated, medical_act_name } = logBook;
  const { id } = auth;
  const { date } = tournee;

  
  return ({
    closeModalEntry,
    closeModalAddPatient,
    planned_date,
    ending_date,
    observations,
    daily,
    done,
    tags,
    isCreated,
    patientId,
    id,
    time,
    done_date,
    date,
    medical_act_name,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(logbookChangeField(value, field));
  },
  handleLogbook: (patientId, nurseId) => {
    dispatch(createLogTour(patientId, nurseId));
  },
  submitUpdateTour: () => {
    console.log("Submit Update Tour dans container TOUR ENTRY MODAL");
    dispatch(submitUpdateTour())
  },
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(TourEntryModal);
