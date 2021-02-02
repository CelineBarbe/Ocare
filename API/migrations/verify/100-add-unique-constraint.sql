-- Verify ocare:100-add-unique-constraint on pg

BEGIN;

INSERT INTO medical_act(name, category)
    VALUES('Saignée - test2', 'Prélèvement et injection');

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id)
    VALUES(2, 14);

ROLLBACK;
