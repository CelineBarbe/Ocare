import { GET_LOGS, SEED_LOGS, LOGBOOK_CHANGE_FIELD, CREATE_LOG, GET_LOGS_BY_DATE } from 'src/actions/types';

export const getLogs = () => ({
  type: GET_LOGS,
});

export const getLogsByDate = (date) => ({
  type: GET_LOGS_BY_DATE,
  date,
});

export const seedLogs = (data) => ({
  type: SEED_LOGS,
  payload: data,
});

export const logbookChangeField = (value, field) => ({
  type: LOGBOOK_CHANGE_FIELD,
  payload: { [field]: value },
});

export const createLog = (patient_id, nurse_id) => ({
  type: CREATE_LOG,
  patient_id,
  nurse_id,
});
