/* eslint-disable object-shorthand */

import { combineReducers } from 'redux';

import auth from './auth';
import cabinets from './cabinets';
import search from './search';
import patients from './patients';
import tournee from './tournee';
import logBook from './logBook';
import notification from './notification';

export default combineReducers({
  auth,
  cabinets,
  logBook,
  patients,
  tournee,
  search,
  notification,
});
