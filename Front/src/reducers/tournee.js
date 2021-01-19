
export const initialState = {
  tournee: [],
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
    /* case TOUR_ADD_PATIENT:
    case TOUR_SUP_PATIENT:
    case TOUR_CHANGE_ORDER:
      return {
        ...oldState,
        ...action.payload,
      }; */
    
    default:
      return { ...oldState };
  }
};

export default reducer;
