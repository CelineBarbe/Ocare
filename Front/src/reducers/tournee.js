import { TOUR_CHANGE_FIELD, CHANGE_DATE } from 'src/actions/types';
var { DateTime } = require('luxon');

export const initialState = {
  //currentdate_tourPage
  date: undefined,
  //date_tour
  tour_date: null,
  //tournee: [],
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
    case TOUR_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    case CHANGE_DATE:
      return {
        ...oldState,
        date: action.date,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
