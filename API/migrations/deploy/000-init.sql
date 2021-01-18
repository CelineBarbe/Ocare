-- Deploy ocare:000-init to pg

BEGIN;

CREATE TABLE nurse(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    SIREN_code TEXT NOT NULL UNIQUE,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    email TEXT NOT NULL,
    password TEXT NOT NULL,
    phone_number INT NOT NULL
);

COMMIT;
