import { connect } from 'react-redux';

import App from 'src/components/App';

import { autoLogin } from 'src/actions/auth';

const mapStateToProps = (store) => {

   return ({
 
  })
}

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => {
    dispatch(autoLogin());
  },
 
})

// appel a connect et export
export default connect(mapStateToProps,mapDispatchToProps)(App);
