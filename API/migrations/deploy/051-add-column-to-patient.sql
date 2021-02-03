-- Deploy ocare:051-add-column-to-patient to pg

BEGIN;

-- add field additional_address in table patient
ALTER TABLE patient
    ADD COLUMN additional_address TEXT;

COMMIT;
