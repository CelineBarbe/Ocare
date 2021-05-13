-- Revert ocare:090-logbook_has_medical_act from pg

BEGIN;

DROP TABLE logbook_has_medical_act;

COMMIT;
