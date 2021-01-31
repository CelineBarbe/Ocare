-- Verify ocare:110-add-tour on pg

BEGIN;

INSERT INTO nurse(id, siren_code, firstname, lastname, email, password, phone_number)
    OVERRIDING SYSTEM VALUE
    VALUES(16, '917222465', 'Olivier', 'Raynal', 'olivier@raynal.com', 'gyefgecz', '0612345678');

INSERT INTO cabinet(id, name, address, zip_code, city, phone_number, pin_code, owner_id)
    OVERRIDING SYSTEM VALUE
    VALUES(1, 'Cabinet Roja', '12 allée de la paix', '28000', 'Chartres', '0723678309', 'secret', 16);

INSERT INTO tour(id, date, information, nurse_id, cabinet_id) 
    OVERRIDING SYSTEM VALUE
VALUES(1, '2021-01-22', 'test création de tournée', 16, 1);

-- INSERT INTO tour_has_patient(tour_id, patient_id) VALUES
-- (1,1);

SELECT * FROM tour_has_patient;

ROLLBACK;
