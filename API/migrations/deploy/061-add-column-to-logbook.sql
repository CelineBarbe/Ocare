-- Deploy ocare:061-add-column-to-logbook to pg

BEGIN;

-- add field time in table logbook
ALTER TABLE logbook
    ADD COLUMN time TIME;

-- Drop table patient_has_logbook
DROP TABLE patient_has_logbook;

COMMIT;
