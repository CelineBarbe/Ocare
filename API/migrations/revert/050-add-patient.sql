-- Revert ocare:050-add-patient from pg

BEGIN;

DROP TABLE patient;

COMMIT;
