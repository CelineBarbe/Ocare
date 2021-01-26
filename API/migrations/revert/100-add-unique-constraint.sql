-- Revert ocare:100-add-unique-constraint from pg

BEGIN;

-- drop constraint 
ALTER TABLE medical_act
    DROP CONSTRAINT medical_act_name_category_key;

-- drop constraint 
ALTER TABLE cabinet_has_nurse
    DROP CONSTRAINT cabinet_has_nurse_cabinet_id_nurse_id_key;

COMMIT;
