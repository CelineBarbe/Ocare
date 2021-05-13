import {SEED_LOGS, LOGBOOK_CHANGE_FIELD, GET_LOGS, SEED_PATIENT, 
  SEED_LOGS_BY_DATE, CHANGE_CABINET, LOGOUT} from 'src/actions/types';

import {returnVoid} from 'src/utils/searchAndReturn'

export const initialState = {
  
  planned_date: null,
  time:null,
  done_date:null,
  observations: '',
  picture:'',
  daily: false,
  done: false,
  ending_date:null,
  tags:[],
  list: [],
  isLoading: false,
  isCreated: false,
  medical_act_name:'Soins infirmiers',
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
     case LOGBOOK_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    case LOGOUT:
      return {
        ...oldState,
        list: [],
      };
      case SEED_LOGS:
        if (oldState.list.length >= 1) {
           return {
          ...oldState,
          planned_date: null,
          time:null,
          done_date:null,
          observations: '',
          daily: false,
          done: false,
          picture:'',
          ending_date:null,
          list: [...oldState.list,action.payload],
          isLoading: false,
        };
        } else {
          return {
            ...oldState,
          planned_date: null,
          time:null,
          done_date:null,
          observations: '',
          daily: false,
          done: false,
          ending_date:null,
          list: [action.payload],
          isLoading: false,
          }
        }
       
      case SEED_LOGS_BY_DATE:
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
      case CHANGE_CABINET:
        return {
          ...oldState,
          list: [],
        }
      case SEED_PATIENT:
        return {
          ...oldState,
          list : returnVoid(action.data.logbook),
        }        
    default:
      return { ...oldState };
  }
};

export default reducer;
