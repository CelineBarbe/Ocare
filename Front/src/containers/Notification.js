import { connect } from 'react-redux'

import { close } from 'src/actions/notification';


import Notification from 'src/components/Notification';

const mapStateToProps = ({ notification }) => {


  const { success, error } = notification;
  return ({
    success,
    error,
  })
}

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => {
    dispatch(close());
  }
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(Notification);
