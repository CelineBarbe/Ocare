import {
  SEED_CABINETS
} from './types';

export const seedcabinets = (data) => ({
  type: SEED_CABINETS,
  payload: data,
});
