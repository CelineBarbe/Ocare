import { connect } from 'react-redux';
import { logbookChangeField, createLog } from 'src/actions/logs';

import EntryModal from 'src/modal/Entry';

const mapStateToProps = ({logBook, auth}, ownProps) => {
  const { closeModalEntry, patientId } = ownProps;
  const { planned_date, time, done_date, ending_date, observations, daily, done, tags, isCreated, medical_act_name, picture } = logBook;
  const { id } = auth;
  
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
    medical_act_name,
    picture,
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    console.log("changeField container entry moral:", value ,"+ field", field);
    dispatch(logbookChangeField(value, field));
  },
  handleLogbook: (patientId, nurseId) => {
    dispatch(createLog(patientId, nurseId));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(EntryModal);
