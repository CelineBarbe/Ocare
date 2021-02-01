-- Deploy ocare:100-add-unique-constraint to pg

BEGIN;

-- add unique constraint in medical_act table
ALTER TABLE medical_act
    ADD UNIQUE(name, category);

-- add unique constraint in cabinet_has_nurse
ALTER TABLE cabinet_has_nurse
    ADD UNIQUE(cabinet_id, nurse_id);

COMMIT;
