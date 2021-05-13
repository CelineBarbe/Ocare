-- Revert ocare:110-add-tour from pg

BEGIN;

DROP TABLE tour_has_patient;
DROP TABLE tour;

COMMIT;
