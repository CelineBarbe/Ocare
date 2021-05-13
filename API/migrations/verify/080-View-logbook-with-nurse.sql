-- Verify ocare:080-View-logbook-with-nurse on pg

BEGIN;

SELECT * FROM logbook_with_nurse_infos;

ROLLBACK;
