-- Deploy ocare:070-add-medical-act to pg

BEGIN;

CREATE TABLE medical_act(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    name TEXT NOT NULL UNIQUE,
    category TEXT
);

COMMIT;
