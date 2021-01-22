import { CABINET_CHANGE_FIELD, SEED_CABINETS, SEED_DEFAULT_CABINET } from 'src/actions/types';

export const initialState = {
  id: null,
  name: '',
  address: '',
  zip_code: null,
  city: '',
  phone_number: '',
  pinCode: '',
  email:'',
  nbPatients:0,
  staff:[],
  list: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CABINET_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    case SEED_CABINETS:
      return {
        ...oldState,
        list: action.payload,
      };
    case SEED_DEFAULT_CABINET:
      return {
        ...oldState,
        id: action.data.id,
        name: action.data.name,
        address: action.data.address,
        zip_code: action.data.zip_code,
        city: action.data.city,
        phone_number: action.data.phone_number,
        staff: action.data.nurses,
        nbPatients: action.data.nbPatients,
        email: action.data.email,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
