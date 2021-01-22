import { SEED_PATIENTS, PATIENT_CHANGE_FIELD } from 'src/actions/types';

export const initialState = {
  id: null,
  firstname: '',
  lastname: '',
  birthdate: '',
  gender: null,
  address:'',
  zip_code:null,
  city:'',
  phone_number:'',
  pathology:'',
  dailyChecking: false,
  number_dailychecking:undefined,
  isloading: false,
  isCreated: false,
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
    case PATIENT_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
