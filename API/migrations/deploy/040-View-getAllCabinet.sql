-- Deploy ocare:040-View-getAllCabinet to pg

BEGIN;

CREATE VIEW all_cabinet AS
    SELECT c.id,
        c.name,
        c.address,
        c.zip_code,
        c.city,
        c.phone_number,
        c.owner_id,
        JSON_AGG(nurse) AS nurses
    FROM cabinet c
        JOIN cabinet_has_nurse chs
            ON c.id = chs.cabinet_id
        JOIN nurse
            ON nurse.id = chs.nurse_id
    GROUP BY c.id;

COMMIT;
