import { SEARCH_CHANGE_FIELD } from 'src/actions/types';

export const initialState = {
  inputSearchDashboard: '',
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SEARCH_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
