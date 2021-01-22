import {
  SEED_PATIENTS, GET_PATIENTS, CREATE_PATIENT, PATIENT_CHANGE_FIELD
} from './types';

export const getPatients = () => ({
  type: GET_PATIENTS,
});

export const seedPatients = (data) => ({
  type: SEED_PATIENTS,
  payload: data,
});

export const createPatient = () => ({
  type: CREATE_PATIENT,
});

export const patientChangeField = (value, field) => ({
  type: PATIENT_CHANGE_FIELD,
  payload: { [field]: value },
});
