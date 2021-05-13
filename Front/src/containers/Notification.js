import { connect } from 'react-redux'

import { close } from 'src/actions/notification';


import Notification from 'src/components/Notification';

const mapStateToProps = ({ notification }) => {


  const { success, error, message } = notification;
  return ({
    success,
    error,
    message,
  })
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(close());
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(Notification);
