-- Verify ocare:051-add-column-to-patient on pg

BEGIN;

INSERT INTO patient(firstname, lastname, birthdate, gender, address, additional_address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id) VALUES
('Lorie', 'Mounier', '1990-02-11', 'F', '76 rue du Gue Jacquet', '' , '78400', 'Chatou', '0108715496', '', false, 1, 1);

ROLLBACK;
