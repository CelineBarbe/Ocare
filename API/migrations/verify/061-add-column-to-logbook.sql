-- Verify ocare:061-add-column-to-logbook on pg

BEGIN;

UPDATE logbook SET time = '13:00:00';

ROLLBACK;
