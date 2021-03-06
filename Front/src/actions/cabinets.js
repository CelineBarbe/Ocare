import {
  SEED_CABINETS, SEED_DEFAULT_CABINET, UNSUB_CABINET, SUB_CABINET, CHANGE_CABINET, 
  CREATE_CABINET, CABINET_CHANGE_FIELD, CREATE_CABINET_SUCCEEDED, UPDATE_CABINET, 
  CABINET_CHANGE_FIELD_UPDATE, SUB_NURSE_CABINET, UNSUB_NURSE_CABINET_OK, SUB_NURSE_CABINET_OK,
  SUB_CABINET_OK, UNSUB_CABINET_OK
} from './types';

import {filterUnsubNurseList, filterUnsubCabinet} from 'src/utils/searchAndReturn';

export const seedCabinets = (data) => ({
  type: SEED_CABINETS,
  payload: data,
});

export const seedDefaultCabinet = (data) => {
  console.log('seed default cab avec:', data.id)
  return({
  type: SEED_DEFAULT_CABINET,
  data,
})

} 
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

export const subCabinetOK = (cabinet) => ({
  type: SUB_CABINET_OK,
  data: cabinet,
})

export const unSubCabinet = (cabinetId) => ({
  type: UNSUB_CABINET,
  cabinetId
})

export const unSubCabinetOK = (cabinetId, list) => {
  console.log(cabinetId, list);
  const result = filterUnsubCabinet(cabinetId, list);
  return ({
  type: UNSUB_CABINET_OK,
  list: result,
})
}



 export const unSubNurseCabinetOK = (idNurse, staff) => {
  const newStaffList = filterUnsubNurseList(idNurse, staff)
  return ({
  type: UNSUB_NURSE_CABINET_OK,
  list: newStaffList,
}) 
 }
export const subNurseCabinet = (idNurse) => ({
  type: SUB_NURSE_CABINET,
  idNurse,
})

export const subNurseCabinetOK = (nurse) => {
return ({
  type: SUB_NURSE_CABINET_OK,
  data: nurse,
})
} 
