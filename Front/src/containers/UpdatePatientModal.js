import { connect } from 'react-redux';

import { logbookChangeField, createLog } from 'src/actions/logs';

import UpdatePatientModal from 'src/modal/UpdatePatientModal';

const mapStateToProps = ({logBook, auth}, ownProps) => {
  const { closeModalEntry, patientId } = ownProps;
  const { planned_date, time, done_date, ending_date, observations, daily, done, tags, isCreated } = logBook;
  const { id } = auth;
  
  return ({
    
  })
}

const mapDispatchToProps = (dispatch) => ({
  
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(UpdatePatientModal);
