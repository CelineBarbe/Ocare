-- Revert ocare:060-add-logbook from pg

BEGIN;

DROP TABLE patient_has_logbook;
DROP TABLE logbook;

COMMIT;
