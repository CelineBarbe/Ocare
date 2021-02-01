-- Revert ocare:061-add-column-to-logbook from pg

BEGIN;

-- Remove field time in table logbook
ALTER TABLE logbook 
    DROP time;

-- patient_has_logbook table
CREATE TABLE patient_has_logbook(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    patient_id INT NOT NULL REFERENCES patient(id) ON DELETE CASCADE,
    logbook_id INT NOT NULL REFERENCES logbook(id) ON DELETE CASCADE
);

COMMIT;
