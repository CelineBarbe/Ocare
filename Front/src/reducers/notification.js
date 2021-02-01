import { SUCCESS, ERROR, CLOSE
} from 'src/actions/types';


export const initialState = {
  // If response 200 send success action
  success:false,
  // If response 404 / 500 send notification error
  error:false,
  // Open  modal
  open:false,
   // close  modal
  close:false,
};

// reducer qui va gérer les recettes
const reducer = (oldState = initialState, action = {}) => {
  switch (action.type) {
    
    case SUCCESS:
      return {
        ...oldState,
        success:true,
        error:false,
      };
    case ERROR:
      return {
        ...oldState,
        error: true,
        success:false,
      };
    case CLOSE:
    return {
      ...oldState,
      close:true,
      success:false,
      error:false,
    };
    default:
      return { ...oldState };
  }
};

export default reducer;
