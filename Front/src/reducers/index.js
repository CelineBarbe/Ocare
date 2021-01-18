/* eslint-disable object-shorthand */

import { combineReducers } from 'redux';

import auth from './auth';
import cabinets from './cabinets';

export default combineReducers({
  auth,
  cabinets,
});
