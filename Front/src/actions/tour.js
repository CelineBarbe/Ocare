import {
  TOUR_CHANGE_FIELD,CREATE_TOUR,CHANGE_DATE
} from './types';


export const tourChangeField = (value, field) => ({
  type: TOUR_CHANGE_FIELD,
  payload: { [field]: value },
});

export const createTour = () => ({
  type: CREATE_TOUR,
});

export const changeDate = (date) => ({
  type: CHANGE_DATE,
  date,
}) 
