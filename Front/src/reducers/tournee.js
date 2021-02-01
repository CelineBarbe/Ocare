import { TOUR_CHANGE_FIELD, CHANGE_DATE,SEED_TOUR, UPDATE_TOUR, 
  UPDATE_TOUR_ADD_PATIENT, CHANGE_TOUR_DATE, GET_TOUR, CREATE_TOUR,UPDATE_TOUR_DONE_OK, DELETE_TOUR_PATIENT_DONE, LOGOUT
} from 'src/actions/types';
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
        list: action.payload,
        isLoading: false,
      };
    case UPDATE_TOUR:
      return {
        ...oldState,
        list: action.newList,
      };
    case UPDATE_TOUR_ADD_PATIENT:
      return {
        ...oldState,
        list: [...oldState.list, action.data]
      };
    case CHANGE_TOUR_DATE:
      return {
        ...oldState,
        tour_date: action.date,
      }
    case GET_TOUR:
      return {
        ...oldState,
        isLoading: true,
      }
    case LOGOUT:
      return {
        ...oldState,
        list: [],
      }
    case CREATE_TOUR:
      return {
        ...oldState,
        isLoading: true,
      }
    case UPDATE_TOUR_DONE_OK:
      return {
        ...oldState,
        list: action.list,
      }
    case DELETE_TOUR_PATIENT_DONE:
      return {
        ...oldState,
        list: action.list,
      }
    default:
      return { ...oldState };
  }
};

export default reducer;
