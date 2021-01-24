import {
  SEED_PATIENTS, GET_PATIENTS, CREATE_PATIENT, PATIENT_CHANGE_FIELD, CREATE_PATIENT_SUCCEEDED, RESET_PATIENT_FIELD, GET_PATIENT, SEED_PATIENT,
} from './types';

export const getPatients = () => ({
  type: GET_PATIENTS,
});

export const getPatient = (id) => ({
  type: GET_PATIENT,
  id,
});

export const seedPatients = (data) => ({
  type: SEED_PATIENTS,
  payload: data,
});

export const seedPatient = (data) => ({
  type: SEED_PATIENT,
  data,
});

export const createPatient = () => ({
  type: CREATE_PATIENT,
});


export const resetPatientField = () => ({
  type: RESET_PATIENT_FIELD,
})

export const patientChangeField = (value, field) => ({
  type: PATIENT_CHANGE_FIELD,
  payload: { [field]: value },
});

export const createPatientSucceeded = (id) => ({
  type: CREATE_PATIENT_SUCCEEDED,
  created_id: id,
})
