-- Deploy ocare:020-add-cabinet-has-nurse to pg

BEGIN;

CREATE TABLE cabinet_has_nurse(
    id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    cabinet_id INT NOT NULL REFERENCES cabinet(id),
    nurse_id INT NOT NULL REFERENCES nurse(id),
    default_cabinet BOOLEAN DEFAULT FALSE,
    allowed BOOLEAN DEFAULT TRUE
);

COMMIT;
