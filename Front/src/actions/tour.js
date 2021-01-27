import {
  TOUR_CHANGE_FIELD,CREATE_TOUR,CHANGE_DATE, SEED_TOUR, GET_TOUR, UPDATE_TOUR
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

export const seedTour = (data) => ({
  type: SEED_TOUR,
  payload: data,
});

export const getTour = () => ({
  type: GET_TOUR,
})

export const updateTour = (newList) => ({
  type: UPDATE_TOUR,
  newList,
}) 
