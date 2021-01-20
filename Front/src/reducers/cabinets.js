import { CABINET_CHANGE_FIELD, SEED_CABINETS } from 'src/actions/types';

export const initialState = {
  id: null,
  name: '',
  adress: '',
  zipCode: null,
  city: '',
  phoneNumber: '',
  pinCode: '',
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
        list: action.data,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
