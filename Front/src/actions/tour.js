import {
  TOUR_CHANGE_FIELD,CREATE_TOUR,CHANGE_DATE, SEED_TOUR, GET_TOUR, 
  UPDATE_TOUR, UPDATE_TOUR_ADD_PATIENT,CHANGE_TOUR_DATE,SUBMIT_UPDATE_TOUR
  
} from './types';
import {returnObjectTourList} from 'src/utils/searchAndReturn';


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

//seed après avoir crée un log depuis tournée
export const updateTourAddPatient = (data, list, listpatient) => {
  const result = returnObjectTourList(data,list, listpatient);
  return ({
  type: UPDATE_TOUR_ADD_PATIENT,
  data : result,
 })
}

export const submitUpdateTour = () => ({
  type: SUBMIT_UPDATE_TOUR,
})

export const changeTourDate = (date) => ({
  type: CHANGE_TOUR_DATE,
  date,
})
