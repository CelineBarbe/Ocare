-- Revert ocare:051-add-column-to-patient from pg

BEGIN;

-- Remove field additional_address in table patient
ALTER TABLE patient 
    DROP additional_address;

COMMIT;
