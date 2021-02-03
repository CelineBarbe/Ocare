-- Verify ocare:010-add-cabinet on pg

BEGIN;

INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, nurse_id)
    VALUES('Cabinet Roja', '12 allée de la paix', '28000', 'Chartres', '0723678309', 'secret', 1);

ROLLBACK;
