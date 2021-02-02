-- Deploy ocare:120-add-document to pg

BEGIN;

-- add field document in logbook
ALTER TABLE logbook 
    ADD COLUMN document TEXT;

-- Add View logbook with nurse details and medical_act_name
CREATE OR REPLACE VIEW logbook_with_nurse_infos_documents AS
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
