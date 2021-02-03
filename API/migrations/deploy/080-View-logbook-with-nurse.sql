-- Deploy ocare:080-View-logbook-with-nurse to pg

BEGIN;

-- Add View logbook with nurse details
CREATE OR REPLACE VIEW logbook_with_nurse_infos AS
SELECT l.*,
    n.firstname as nurse_firstname,
    n.lastname as nurse_lastname
    FROM logbook l
        JOIN nurse n
            ON n.id = l.nurse_id;

COMMIT;
