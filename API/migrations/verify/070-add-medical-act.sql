-- Verify ocare:070-add-medical-act on pg

BEGIN;

INSERT INTO medical_act(name, category)
    VALUES('Saignée - test', 'Prélèvement et injection');

ROLLBACK;
