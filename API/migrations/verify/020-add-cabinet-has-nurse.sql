-- Verify ocare:020-add-cabinet-has-nurse on pg

BEGIN;

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id)
    VALUES(1, 1);

ROLLBACK;
