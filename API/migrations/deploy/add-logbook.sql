BEGIN;

CREATE TABLE logbook(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    creation_date TIMESTAMPZ NOT NULL,
    hour TIME,
    observations TEXT NOT NULL,
    daily BOOLEAN DEFAULT FALSE,
    done BOOLEAN DEFAULT FALSE,
    nurse_id INT NOT NULL REFERENCES nurse(id),
    patient_id INT NOT NULL REFERENCES patient(id)
);

COMMIT;
