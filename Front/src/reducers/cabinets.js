import { CABINET_CHANGE_FIELD, SEED_CABINETS, SUB_CABINET, SEED_DEFAULT_CABINET, PRE_CREATE_CABINET, CREATE_CABINET_SUCCEEDED, CABINET_CHANGE_FIELD_UPDATE } from 'src/actions/types';

export const initialState = {
  id: null,
  name: '',
  address: '',
  zip_code: '',
  city: '',
  phone_number: '',
  pin_code: '',
  email:'',
  subcribeId:null,
  nbpatients:0,
  newEntryName:'',
  newEntryAddress:'',
  newEntryZip_code:'',
  newEntryCity:'',
  newEntryPhone_number:'',
  newEntryPin_code:'',
  newEntryMail:'',
  isCreated: false,
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
        nbpatients: action.data.nbpatients,
        email: action.data.email,
      };
    case CABINET_CHANGE_FIELD_UPDATE:
      return {
        ...oldState,
        ...action.payload,
      };
    case SUB_CABINET:
      return {
        ...oldState,
        isCreated:true,
      };
    case CREATE_CABINET_SUCCEEDED:
      return {
        ...oldState,
        id: action.data.id,
        name: action.data.name,
        address: action.data.address,
        zip_code: action.data.zip_code,
        city: action.data.city,
        phone_number: action.data.phone_number,
        email: action.email,
        isCreated: true,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
