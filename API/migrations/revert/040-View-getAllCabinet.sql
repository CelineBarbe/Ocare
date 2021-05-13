-- Revert ocare:040-View-getAllCabinet from pg

BEGIN;

DROP VIEW all_cabinet;

COMMIT;
