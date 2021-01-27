import { connect } from 'react-redux';

import { logbookChangeField, createLog } from 'src/actions/logs';

import TourEntryModal from 'src/modal/TourEntryModal';

const mapStateToProps = ({logBook, auth, tournee}, ownProps) => {
  const { closeModalEntry, patientId } = ownProps;
  const { planned_date, time, done_date, ending_date, observations, daily, done, tags, isCreated } = logBook;
  const { id } = auth;
  const { date } = tournee;
  
  return ({
    closeModalEntry,
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
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(logbookChangeField(value, field));
  },
  handleLogbook: (patientId, nurseId) => {
    dispatch(createLog(patientId, nurseId));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(TourEntryModal);
