-- Revert ocare:070-add-medical-act from pg

BEGIN;

DROP TABLE medical_act;

COMMIT;
