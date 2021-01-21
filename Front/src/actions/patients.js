import {
  SEED_PATIENTS, GET_PATIENTS
} from './types';

export const getPatients = () => ({
  type: GET_PATIENTS,
});



export const seedPatients = (data) => ({
  type: SEED_PATIENTS,
  payload: data,
});

