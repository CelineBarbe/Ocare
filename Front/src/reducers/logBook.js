
export const initialState = {
  //id: null,
  //creation_date: '',
  planned_date: '',
  //done_date: '',
  hour: null,
  observations: '',
  //daily: false,
  done: false,
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    /* case LOGBOOK_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };  */
    default:
      return { ...oldState };
  }
};

export default reducer;
