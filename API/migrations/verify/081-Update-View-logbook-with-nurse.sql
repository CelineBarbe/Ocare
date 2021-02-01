-- Verify ocare:081-Update-View-logbook-with-nurse on pg

BEGIN;

SELECT * FROM logbook_with_nurse_infos;

ROLLBACK;
