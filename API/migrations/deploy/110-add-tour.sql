-- Deploy ocare:110-add-tour to pg

BEGIN;

CREATE TABLE tour(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    date TIMESTAMPTZ NOT NULL,
    information TEXT,
    nurse_id INT NOT NULL REFERENCES nurse(id) ON DELETE SET NULL,
    cabinet_id INT NOT NULL REFERENCES cabinet(id) ON DELETE CASCADE,
    UNIQUE(date, cabinet_id)
);

CREATE TABLE tour_has_patient(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    tour_id INT NOT NULL REFERENCES tour(id) ON DELETE CASCADE,
    patient_id INT NOT NULL REFERENCES patient(id) ON DELETE CASCADE,
    order_tour INT
);

COMMIT;
