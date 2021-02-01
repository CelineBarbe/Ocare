-- Deploy ocare:090-logbook_has_medical_act to pg

BEGIN;

CREATE TABLE logbook_has_medical_act(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    logbook_id INT NOT NULL REFERENCES logbook(id) ON DELETE CASCADE,
    medical_act_id INT NOT NULL REFERENCES medical_act(id) ON DELETE CASCADE
);

COMMIT;
