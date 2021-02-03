-- Revert ocare:080-View-logbook-with-nurse from pg

BEGIN;

DROP VIEW logbook_with_nurse_infos;

COMMIT;
