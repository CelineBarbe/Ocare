import { CABINET_CHANGE_FIELD, SEED_CABINETS, SUB_CABINET, UNSUB_NURSE_CABINET_OK,
  SEED_DEFAULT_CABINET, PRE_CREATE_CABINET, CREATE_CABINET, SUB_NURSE_CABINET_OK,
  CREATE_CABINET_SUCCEEDED, CABINET_CHANGE_FIELD_UPDATE, INIT_DASHBOARD, CHANGE_CABINET, UNSUB_CABINET, LOGOUT } from 'src/actions/types';

export const initialState = {
  id: null,
  name: '',
  address: '',
  zip_code: '',
  city: '',
  phone_number: '',
  pin_code: '',
  email:'',
  owner_id:'',
  subcribeId:null,
  nbpatients:0,
  newEntryName:'',
  newEntryAddress:'',
  newEntryZip_code:'',
  newEntryCity:'',
  newEntryPhone_number:'',
  newEntryPin_code:'',
  newEntryMail:'',
  isLoading: false, 
  isCreated: false,
  error: false,
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
    case CHANGE_CABINET:
      return {
        ...oldState,
        isLoading: true,
      };
    case UNSUB_NURSE_CABINET_OK:
      return {
        ...oldState,
        staff: action.list,
      }
    case SEED_CABINETS:
      return {
        ...oldState,
        list: action.payload,
        isLoading: false,
        isCreated: false,
      };
    case CREATE_CABINET:
      return {
        ...oldState,
        isLoading: true,
      };
    case INIT_DASHBOARD:
      return {
        ...oldState,
        isLoading: true,
        isCreated: false,

      };
    case SUB_NURSE_CABINET_OK:
      return {
        ...oldState,
        staff: [...oldState.staff,action.data],
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
        owner_id: action.data.owner_id,
        isLoading: false,
        isCreated: false,

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
    case UNSUB_CABINET:
      return {
        ...oldState,
        name: '',
        address: '',
        zip_code: '',
        city: '',
        phone_number: '',
        pin_code: '',
        email:'',
      };
    case LOGOUT:
      return {
        ...oldState,
        name: '',
        address: '',
        zip_code: '',
        city: '',
        phone_number: '',
        pin_code: '',
        email:'',
        staff:[],
        list: [],
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
        isLoading: false,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
