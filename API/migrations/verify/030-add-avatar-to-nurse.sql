-- Verify ocare:030-add-avatar-to-nurse on pg

BEGIN;

INSERT INTO nurse(id, siren_code, firstname, lastname, email, password, phone_number, avatar)
    OVERRIDING SYSTEM VALUE
VALUES(1, '837000444', 'Olivia', 'Renée', 'olivia@renee.com', '123AZE', '0183345678', default);

INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, owner_id)
    VALUES('Cabinet Toto', '2 rue de la Soif', '78000', 'Versailles', '0723984747', 'frf333', 1);


ROLLBACK;
