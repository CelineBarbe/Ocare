-- Revert ocare:030-add-avatar-to-nurse from pg

BEGIN;

-- rename nurse_id to owner_id
ALTER TABLE cabinet RENAME owner_id TO nurse_id;

-- add field avatar in table nurse
ALTER TABLE nurse 
    DROP avatar;

COMMIT;
