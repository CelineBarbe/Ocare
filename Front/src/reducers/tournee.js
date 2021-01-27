import { TOUR_CHANGE_FIELD, CHANGE_DATE,SEED_TOUR } from 'src/actions/types';
var { DateTime } = require('luxon');

export const initialState = {
  //currentdate_tourPage
  date: undefined,
  //date_tour
  tour_date: null,
  //tournee: [],
  list: [],
  //loader
  isLoading: false,
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
    case SEED_TOUR:
      return {
        ...oldState,
        list: [...oldState.list,action.payload],
        isLoading: false,
      };

    default:
      return { ...oldState };
  }
};

export default reducer;
