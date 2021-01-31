-- Verify ocare:020-add-cabinet-has-nurse on pg

BEGIN;

INSERT INTO nurse(id, siren_code, firstname, lastname, email, password, phone_number)
    OVERRIDING SYSTEM VALUE
    VALUES(1, '917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678');

INSERT INTO cabinet(id, name, address, zip_code, city, phone_number, pin_code, nurse_id)
    OVERRIDING SYSTEM VALUE
    VALUES(1, 'Cabinet Roja', '12 allée de la paix', '28000', 'Chartres', '0723678309', 'secret', 1);

INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id)
    VALUES(1, 1);

ROLLBACK;
