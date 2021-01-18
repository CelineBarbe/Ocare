import { CABINET_CHANGE_FIELD } from 'src/actions/types';

export const initialState = {
  id: null,
  name: '',
  adress: '',
  zipCode: null,
  city: '',
  phoneNumber: '',
  pinCode: '',
  cabinets: [],
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    case CABINET_CHANGE_FIELD:
      return {
        ...oldState,
        ...action.payload,
      };
    default:
      return { ...oldState };
  }
};

export default reducer;
