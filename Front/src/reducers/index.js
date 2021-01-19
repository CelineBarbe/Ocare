/* eslint-disable object-shorthand */

import { combineReducers } from 'redux';

import auth from './auth';
import cabinets from './cabinets';
import search from './search';

export default combineReducers({
  auth,
  cabinets,
  search,
});
