-- Verify ocare:100-add-unique-constraint on pg

BEGIN;

INSERT INTO medical_act(name, category)
    VALUES('Saignée - test2', 'Prélèvement et injection');

INSERT INTO nurse(id, siren_code, firstname, lastname, email, password, phone_number)
    OVERRIDING SYSTEM VALUE
    VALUES(14, '917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678');

INSERT INTO cabinet(id, name, address, zip_code, city, phone_number, pin_code, owner_id)
    OVERRIDING SYSTEM VALUE
    VALUES(2, 'Cabinet Roja', '12 allée de la paix', '28000', 'Chartres', '0723678309', 'secret', 14);

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id)
    VALUES(2, 14);

ROLLBACK;
