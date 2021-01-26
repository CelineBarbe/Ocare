import { SEED_PATIENTS, PATIENT_CHANGE_FIELD, UPDATE_PATIENT, CREATE_PATIENT_SUCCEEDED, RESET_PATIENT_FIELD, SEED_PATIENT, GET_PATIENT } from 'src/actions/types';

export const initialState = {
  id: null,
  firstname: '',
  lastname: '',
  birthdate: '',
  gender: 'male',
  address:'',
  zip_code:'',
  city:'',
  phone_number:'',
  pathology:'',
  daily_checking: false,
  number_dailychecking:undefined,
  isloading: false,
  isCreated: false,
  created_id: undefined,
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
    case SEED_PATIENT:
      return {
        ...oldState,
        firstname: action.data.firstname,
        lastname: action.data.lastname,
        birthdate: action.data.birthdate,
        gender: action.data.gender,
        address:action.data.address,
        zip_code:action.data.zip_code,
        city:action.data.city,
        phone_number:action.data.phone_number,
        pathology:action.data.pathology,
        daily_checking: action.data.daily_checking,
        number_dailychecking:action.data.number_dailychecking,
        isLoading: false,
      }; 
    case PATIENT_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    case GET_PATIENT:
      return {
        ...oldState,
        isLoading: true,
      };
    case CREATE_PATIENT_SUCCEEDED:
      return {
        ...oldState,
        isCreated: true,
        created_id: action.created_id,
      };
    case RESET_PATIENT_FIELD:
      return {
        ...oldState,
        isCreated: false,
        firstname: '',
        lastname: '',
        birthdate: '',
        gender: 'male',
        address:'',
        zip_code:'',
        city:'',
        phone_number:'',
        pathology:'',
        daily_checking: false,
        number_dailychecking:undefined,
        created_id: undefined,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
