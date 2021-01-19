
export const initialState = {
  id: null,
  firstName: '',
  lastName: '',
  birthdate: '',
  gender: null,
  address:'',
  zipcode:null,
  city:'',
  phoneNumber:'',
  pathology:'',
  dailyChecking: false,
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    /* case PATIENT_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      }; */
    
    default:
      return { ...oldState };
  }
};

export default reducer;
