-- Verify ocare:061-add-column-to-logbook on pg

BEGIN;

INSERT INTO logbook(creation_date, planned_date, time, done_date, observations, daily, done, ending_date, nurse_id, patient_id) VALUES
('2021-01-22', '2021-01-23', null ,null, 'Faire une prise de sang et contrôler la tension', false, false, null, 1, 2);

ROLLBACK;
