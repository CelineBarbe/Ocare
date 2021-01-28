-- Deploy ocare:042-Update-View-getAllCabinet to pg

BEGIN;

-- Replace View all_cabinet add number of patients - ADD LEFT OUTER JOIN ON PATIENT
CREATE OR REPLACE VIEW all_cabinet AS
    SELECT c.id,
        c.name,
        c.address,
        c.zip_code,
        c.city,
        c.phone_number,
        c.owner_id,
        JSON_AGG(DISTINCT nurse_without_password) AS nurses,
        COUNT(DISTINCT p.id) as nbPatients
    FROM cabinet c
        JOIN cabinet_has_nurse chs
            ON c.id = chs.cabinet_id
        JOIN nurse
            ON nurse.id = chs.nurse_id
        LEFT OUTER JOIN patient p
            ON p.cabinet_id = c.id
        JOIN nurse_without_password
            ON nurse_without_password.id = nurse.id
    GROUP BY c.id;

COMMIT;
