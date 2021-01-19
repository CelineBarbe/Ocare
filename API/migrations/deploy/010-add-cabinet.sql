-- Deploy ocare:010-add-cabinet to pg

BEGIN;

CREATE TABLE cabinet(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    city TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    pin_code TEXT NOT NULL,
    nurse_id INT NOT NULL REFERENCES nurse(id)
);

COMMIT;
