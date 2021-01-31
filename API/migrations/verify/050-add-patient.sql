-- Verify ocare:050-add-patient on pg

BEGIN;

INSERT INTO nurse(id, siren_code, firstname, lastname, email, password, phone_number)
    OVERRIDING SYSTEM VALUE
    VALUES(1, '917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678');

INSERT INTO cabinet(id, name, address, zip_code, city, phone_number, pin_code, owner_id)
    OVERRIDING SYSTEM VALUE
    VALUES(1, 'Cabinet Roja', '12 allée de la paix', '28000', 'Chartres', '0723678309', 'secret', 1);

INSERT INTO patient(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id) VALUES
('Ninette', 'Cressac', '1966-02-11', 'F', '76 rue du Gue Jacquet', '78400', 'Chatou', '0108715496', '', false, 1, 1);

ROLLBACK;
