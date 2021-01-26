import {
  SEED_CABINETS, SEED_DEFAULT_CABINET, UNSUB_CABINET, SUB_CABINET, CHANGE_CABINET, CREATE_CABINET, CABINET_CHANGE_FIELD, CREATE_CABINET_SUCCEEDED, UPDATE_CABINET, CABINET_CHANGE_FIELD_UPDATE,
} from './types';

export const seedCabinets = (data) => ({
  type: SEED_CABINETS,
  payload: data,
});

export const seedDefaultCabinet = (data) => ({
  type: SEED_DEFAULT_CABINET,
  data,
})

export const createCabinetSucceeded = (data,email) => ({
  type: CREATE_CABINET_SUCCEEDED,
  data,
  email,
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

export const cabinetUpdated = (data) => ({
  type: UPDATED_CABINET,
  data,
})

export const updateCabinet = () => ({
  type: UPDATE_CABINET,
});

export const cabChangeFieldUpdate = (value, field) => ({
  type: CABINET_CHANGE_FIELD_UPDATE,
  payload: { [field]: value },
});

export const subCabinet = (id) => ({
  type: SUB_CABINET,
  id
})

export const unSubCabinet = (cabinetId) => ({
  type: UNSUB_CABINET,
  cabinetId
})

