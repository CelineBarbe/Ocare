import { SEED_PATIENTS } from 'src/actions/types';

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
  isloading: false,
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case SEED_PATIENTS:
      return {
        ...oldState,
        list: action.payload,
      }; 
    
    default:
      return { ...oldState };
  }
};

export default reducer;
