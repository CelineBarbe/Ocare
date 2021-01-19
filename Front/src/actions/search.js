import {
  SEARCH_CHANGE_FIELD, SEARCH_SUBMIT,
} from './types';

export const changeField = (value, field) => ({
  type: SEARCH_CHANGE_FIELD,
  payload: { [field]: value },
});

export const onSubmit = () => ({
  type: SEARCH_SUBMIT,
});
