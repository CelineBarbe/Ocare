import {SEED_LOGS, LOGBOOK_CHANGE_FIELD, GET_LOGS, SEED_PATIENT} from 'src/actions/types';

export const initialState = {
  
  planned_date: null,
  time:null,
  done_date:null,
  observations: null,
  daily: false,
  done: false,
  ending_date:null,
  tags:[],
  list: [],
  isLoading: false,
  isCreated: false,
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
     case LOGBOOK_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
      case SEED_LOGS:
        return {
          ...oldState,
          list: action.payload,
          isLoading: false,
        };
      case GET_LOGS:
        return {
          ...oldState,
          isLoading: true,
        }
      case SEED_PATIENT:
        return {
          ...oldState,
          list : action.data.logbook,
        }        
    default:
      return { ...oldState };
  }
};

export default reducer;
