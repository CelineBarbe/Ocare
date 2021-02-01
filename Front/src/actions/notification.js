import { SUCCESS, ERROR, OPEN, CLOSE,NOTIFY 
} from 'src/actions/types';

export const success = () => ({
  type: SUCCESS,
});

export const error = () => ({
  type: ERROR,
});

export const open = () => ({
  type: OPEN,
});

export const close = () => ({
  type: CLOSE,
});

export const notify = (message) => ({
  type: NOTIFY,
  message
});
