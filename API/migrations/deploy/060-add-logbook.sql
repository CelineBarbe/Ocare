-- Deploy ocare:060-add-logbook to pg

BEGIN;

-- logbook table
CREATE TABLE logbook(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    creation_date TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    planned_date TIMESTAMPTZ DEFAULT NOW() CHECK (planned_date >= creation_date), -- si le soin a lieu ultérieurement
    done_date TIMESTAMPTZ DEFAULT NULL, -- date à laquelle le soin programmé ultérieurement a été fait
    observations TEXT,
    daily BOOLEAN DEFAULT FALSE, -- tournée par défaut
    done BOOLEAN DEFAULT FALSE, -- le soin daté ultérieurement a été fait
    ending_date TIMESTAMPTZ DEFAULT NULL,
    nurse_id INT NOT NULL REFERENCES nurse(id) ON DELETE SET NULL,
    patient_id INT NOT NULL REFERENCES patient(id) ON DELETE CASCADE
);

-- patient_has_logbook table

CREATE TABLE patient_has_logbook(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    patient_id INT NOT NULL REFERENCES patient(id) ON DELETE CASCADE,
    logbook_id INT NOT NULL REFERENCES logbook(id) ON DELETE CASCADE
);

COMMIT;
