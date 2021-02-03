-- Deploy ocare:081-Update-View-logbook-with-nurse to pg

BEGIN;

-- Add View logbook with nurse details and medical_act_name
CREATE OR REPLACE VIEW logbook_with_nurse_infos AS
SELECT l.*,
    n.firstname as nurse_firstname,
    n.lastname as nurse_lastname,
    m.name as medical_act_name
    FROM logbook l
        JOIN nurse n
            ON n.id = l.nurse_id
        LEFT OUTER JOIN logbook_has_medical_act lhma
            ON l.id = lhma.logbook_id
        LEFT OUTER JOIN medical_act m
            ON m.id = lhma.medical_act_id;

COMMIT;
