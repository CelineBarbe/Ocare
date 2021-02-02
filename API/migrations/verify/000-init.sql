-- Verify ocare:000-init on pg

BEGIN;

INSERT INTO nurse(siren_code, firstname, lastname, email, password, phone_number)
    VALUES('917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678');

ROLLBACK;
