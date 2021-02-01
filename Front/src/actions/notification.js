import { SUCCESS, ERROR, OPEN, CLOSE
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

