-- Verify ocare:060-add-logbook on pg

BEGIN;

INSERT INTO logbook(creation_date, planned_date, done_date, observations, daily, done, ending_time, nurse_id, patient_id) VALUES
('2021-01-22', '2021-01-23', null, 'Faire une prise de sang et contrôler la tension', false, false, null, 1, 2);

INSERT INTO patient_has_logbook(patient_id, logbook_id) VALUES
(1,1);

ROLLBACK;

