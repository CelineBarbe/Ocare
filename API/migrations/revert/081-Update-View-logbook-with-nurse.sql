-- Revert ocare:081-Update-View-logbook-with-nurse from pg

BEGIN;

DROP VIEW logbook_with_nurse_infos;

CREATE OR REPLACE VIEW logbook_with_nurse_infos AS
SELECT l.*,
    n.firstname as nurse_firstname,
    n.lastname as nurse_lastname
    FROM logbook l
        JOIN nurse n
            ON n.id = l.nurse_id;

COMMIT;
