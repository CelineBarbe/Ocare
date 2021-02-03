-- Verify ocare:050-add-patient on pg

BEGIN;

INSERT INTO patient(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id) VALUES
('Ninette', 'Cressac', '1966-02-11', 'F', '76 rue du Gue Jacquet', '78400', 'Chatou', '0108715496', '', false, 1, 1);

ROLLBACK;
