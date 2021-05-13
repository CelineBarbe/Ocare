import {
  TOUR_CHANGE_FIELD,CREATE_TOUR,CHANGE_DATE, SEED_TOUR, GET_TOUR, 
  UPDATE_TOUR, UPDATE_TOUR_ADD_PATIENT,CHANGE_TOUR_DATE,SUBMIT_UPDATE_TOUR,
  UPDATE_TOUR_DONE, UPDATE_TOUR_DONE_OK, DELETE_TOUR_PATIENT,DELETE_TOUR_PATIENT_DONE,
  
} from './types';
import {returnObjectTourList, toOrder, doneTask, filterDeletePatientList} from 'src/utils/searchAndReturn';


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

export const seedTour = (data) => {
const result = toOrder(data);
return ({
  type: SEED_TOUR,
  payload: result,
});
}

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

export const updateTourDone = (id) => ({
  type: UPDATE_TOUR_DONE,
  idLog: id,
})

export const updateTourDoneOK = (list,id) => {
  const updateList = doneTask(list,id);
return ({
  type: UPDATE_TOUR_DONE_OK,
  list: updateList,
})
}

export const deleteTourPatient = (idTourPatient, idLog) => {
  return ({
    type: DELETE_TOUR_PATIENT,
    idTourPatient,
    idLog,
  })
}

export const deleteTourPatientDone = (idLog, list) => {
console.log("a faire filter avec idLog", idLog)
const newList = filterDeletePatientList(idLog, list);
  return ({
    type: DELETE_TOUR_PATIENT_DONE,
    list : newList,
  })
}
