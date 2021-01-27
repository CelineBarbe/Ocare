/* eslint-disable import/no-unresolved */
import { connect } from 'react-redux';

import { autoLogin } from 'src/actions/auth';
import HomePage from 'src/components/HomePage';


const mapStateToProps = ({auth}) => {
 const {isLogged} = auth;
 return {
   isLogged,
 }
};

const mapDispatchToProps = (dispatch) => ({
  autoLogin: () => {
    dispatch(autoLogin());
  },
});

// appel a connect et export
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
