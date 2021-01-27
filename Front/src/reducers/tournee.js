import { TOUR_CHANGE_FIELD } from 'src/actions/types';

export const initialState = {
  tour_date: null,
  tournee: [],
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
    
    default:
      return { ...oldState };
  }
};

export default reducer;
