import {
  SEED_CABINETS, SEED_DEFAULT_CABINET, CHANGE_CABINET, CREATE_CABINET, CABINET_CHANGE_FIELD, PRE_CREATE_CABINET, CREATE_CABINET_SUCCEEDED
} from './types';

export const seedCabinets = (data) => ({
  type: SEED_CABINETS,
  payload: data,
});

export const seedDefaultCabinet = (data) => ({
  type: SEED_DEFAULT_CABINET,
  data,
})

export const createCabinetSucceeded = (data) => ({
  type: CREATE_CABINET_SUCCEEDED,
  data,
})

export const changeCabinet = (idCab) => ({
  type: CHANGE_CABINET,
  idCab,
})

export const cabChangeField = (value, field) => ({
  type: CABINET_CHANGE_FIELD,
  payload: { [field]: value },
});

export const createCabinet = () => ({
  type: CREATE_CABINET,
})

export const preCreateCabinet = () => ({
  type: PRE_CREATE_CABINET,
})
