-- Revert ocare:000-init from pg

BEGIN;

DROP TABLE nurse;

COMMIT;
