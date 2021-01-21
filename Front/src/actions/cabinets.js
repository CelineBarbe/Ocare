import {
  SEED_CABINETS, SEED_DEFAULT_CABINET, CHANGE_CABINET
} from './types';

export const seedCabinets = (data) => ({
  type: SEED_CABINETS,
  payload: data,
});

export const seedDefaultCabinet = (data) => ({
  type: SEED_DEFAULT_CABINET,
  data,
})

export const changeCabinet = (idCab) => ({
  type: CHANGE_CABINET,
  idCab,
})
