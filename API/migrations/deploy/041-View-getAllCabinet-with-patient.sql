-- Deploy ocare:041-View-getAllCabinet-with-patient to pg

BEGIN;

-- View table nurse whithout password
CREATE VIEW nurse_without_password AS
SELECT n.id,
    n.siren_code,
    n.firstname,
    n.lastname,
    n.email,
    n.phone_number,
    n.avatar
    FROM nurse n;

-- Replace View all_cabinet add number of patients
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
        JOIN patient p
            ON p.cabinet_id = c.id
        JOIN nurse_without_password
            ON nurse_without_password.id = nurse.id
    GROUP BY c.id;

COMMIT;
