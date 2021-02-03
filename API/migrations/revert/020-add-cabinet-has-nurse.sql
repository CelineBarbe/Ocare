-- Revert ocare:020-add-cabinet-has-nurse from pg

BEGIN;

DROP TABLE cabinet_has_nurse;

COMMIT;
