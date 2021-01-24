import {SEED_LOGS, LOGBOOK_CHANGE_FIELD, GET_LOGS} from 'src/actions/types';

export const initialState = {
  
  planned_date: '',
  ending_date:'',
  observations: '',
  daily: false,
  done: false,
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
    default:
      return { ...oldState };
  }
};

export default reducer;
