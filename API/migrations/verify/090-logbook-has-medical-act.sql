-- Verify ocare:090-logbook_has_medical_act on pg

BEGIN;

INSERT INTO logbook_has_medical_act(logbook_id, medical_act_id)
    VALUES(1, 1);

ROLLBACK;
