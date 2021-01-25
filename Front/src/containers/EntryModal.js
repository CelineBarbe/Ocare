import { connect } from 'react-redux';

import { logbookChangeField, createLog } from 'src/actions/logs';

import EntryModal from 'src/modal/Entry';

const mapStateToProps = ({logBook}, ownProps) => {
  const { closeModalEntry, patientId } = ownProps;
  const { planned_date, ending_date, observations, daily, done, tags, isCreated } = logBook
  return ({
    closeModalEntry,
    planned_date,
    ending_date,
    observations,
    daily,
    done,
    tags,
    isCreated,
    patientId
  })
}

const mapDispatchToProps = (dispatch) => ({
  changeField: (value, field) => {
    dispatch(logbookChangeField(value, field));
  },
  handleLogbook: (id) => {
    dispatch(createLog(id));
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(EntryModal);
