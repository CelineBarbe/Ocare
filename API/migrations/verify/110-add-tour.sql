-- Verify ocare:110-add-tour on pg

BEGIN;

INSERT INTO tour(date, information, nurse_id, cabinet_id) VALUES
('2021-01-22', 'test création de tournée', 16, 1);

INSERT INTO tour_has_patient(tour_id, patient_id) VALUES
(1,1);

ROLLBACK;
