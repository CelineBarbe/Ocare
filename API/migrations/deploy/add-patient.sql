BEGIN;

CREATE TABLE patient(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    firstname TEXT NOT NULL,
    lastname TEXT NOT NULL,
    birthdate DATE NOT NULL,
    gender TEXT NOT NULL,
    zip_code TEXT NOT NULL,
    city TEXT NOT NULL,
    phone_number TEXT NOT NULL,
    pathology TEXT NOT NULL,
    daily_checking BOOLEAN DEFAULT FALSE,
    number_daily_checking INT,
    cabinet_id INT NOT NULL REFERENCES cabinet(id)
);

COMMIT;
