
-- Récupérer le cabinet par défaut du user connecté
SELECT nurse.*,
chs.cabinet_id AS default_cabinet
FROM nurse
    JOIN cabinet_has_nurse chs
        ON nurse.id = chs.nurse_id
WHERE email = 'olivier@raynal.com' 
AND password = 'gyefgecz'
AND chs.default_cabinet = true;

const result = await client.query(`
        SELECT nurse.*,
        chs.cabinet_id AS default_cabinet
            FROM nurse
                JOIN cabinet_has_nurse chs
            ON nurse.id = chs.nurse_id
            WHERE email = $1 
            AND password = $2`, [email, password]);

SELECT nurse.*,
chs.cabinet_id AS default_cabinet
FROM nurse
    JOIN cabinet_has_nurse chs
        ON nurse.id = chs.nurse_id
    WHERE nurse.id = 1
AND chs.default_cabinet = true;

-- cabinet.getAllCabinet() => Récupérer tous les cabinets pour un userID, + nb Patients, + staff

SELECT c.id,
    c.name,
    c.address,
    c.zip_code,
    c.city,
    c.phone_number,
    c.owner_id,
    JSON_AGG(DISTINCT nurse) as nurses,
    COUNT(DISTINCT p.id) as nbPatients
    FROM cabinet c
    JOIN cabinet_has_nurse chs
        ON c.id = chs.cabinet_id
    JOIN nurse
        ON nurse.id = chs.nurse_id
    JOIN patient p
        ON p.cabinet_id = c.id 
    WHERE chs.nurse_id = 2
    GROUP BY c.id;

-- TEST CREE UNE FONCTION --- RENVOI
CREATE FUNCTION all_cabinet(nurse_id INT) RETURNS TABLE("id" INT, "name" TEXT, "address" TEXT, "zip_code" TEXT, "city" TEXT, "phone_number" TEXT, "owner_id" INT, "nurses" JSON, "nbPatient" BIGINT) AS
$$
    SELECT c.id,
    c.name,
    c.address,
    c.zip_code,
    c.city,
    c.phone_number,
    c.owner_id,
    JSON_AGG(DISTINCT nurse) as nurses,
    COUNT(DISTINCT p.id) as nbPatients
    FROM cabinet c
    JOIN cabinet_has_nurse chs
        ON c.id = chs.cabinet_id
    JOIN nurse
        ON nurse.id = chs.nurse_id
    JOIN patient p
        ON p.cabinet_id = c.id 
    WHERE chs.nurse_id = nurse_id
    GROUP BY c.id;
$$
LANGUAGE sql VOLATILE STRICT;

--- Récupérer les détails d'un cabinet et le staff
SELECT c.id,
    c.name,
    c.address,
    c.zip_code,
    c.city,
    c.phone_number,
    c.owner_id,
    JSON_AGG(nurse)
FROM cabinet c
    JOIN cabinet_has_nurse chs
        ON c.id = chs.cabinet_id 
    JOIN nurse
        ON nurse.id = chs.nurse_id
    WHERE c.id = 1
GROUP BY c.id;

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

CREATE VIEW nurse_by_cabinet AS
SELECT cabinet.name,
        cabinet.id,
    nurse.id AS nurseID 
FROM cabinet
    JOIN cabinet_has_nurse chn
        ON cabinet.id = chn.cabinet_id
    JOIN nurse
        ON nurse.id = chn.nurse_id;

SELECT nurse_by_cabinet.name,
nurse_by_cabinet.id,
nurse_by_cabinet.nurseid,
JSON_AGG(nurse)
FROM nurse_by_cabinet
    JOIN nurse
        ON nurse.id = nurse_by_cabinet.nurseid
        WHERE nurse_by_cabinet.nurseid = 1
GROUP BY nurse_by_cabinet.name, nurse_by_cabinet.id, nurse_by_cabinet.nurseid;

SELECT *
FROM test
    JOIN cabinet_has_nurse
        ON cabinet_has_nurse.cabinet_id = test.id
    WHERE cabinet_has_nurse.nurse_id = 1;


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

"card_id" INT NOT NULL REFERENCES "card"("id") ON DELETE CASCADE,

-- All logbook by cabinet

SELECT l.*,
    p.firstname,
    p.lastname
    FROM logbook l
        JOIN patient p
            ON p.id = l.patient_id
        JOIN patient_has_logbook phl
            ON l.id = phl.logbook_id
        JOIN cabinet c
            ON c.id = p.cabinet_id
    WHERE c.id = 1;
    

-- Vue Table nurse sans password
CREATE VIEW nurse_without_password AS
SELECT n.id,
    n.siren_code,
    n.firstname,
    n.lastname,
    n.email,
    n.phone_number,
    n.avatar
    FROM nurse n;

-- Vue Table logbook avec nom prénom du nurse
CREATE VIEW logbook_with_nurse_infos AS
SELECT l.*,
    n.firstname as nurse_firstname,
    n.lastname as nurse_lastname
    FROM logbook l
        JOIN nurse n
            ON n.id = l.nurse_id;

-- Patient avec visite quotidienne à true sur un cabinet avec ses logbook - TRES COMPLET
SELECT p.* FROM patient p
    WHERE daily_checking = true;

SELECT p.firstname,
    lastname,
    p.id AS patientID,
    l.*,
    m.*
    FROM patient p
        JOIN logbook l
            ON p.id = l.patient_id
        JOIN logbook_has_medical_act lhma
            ON l.id = lhma.logbook_id
        JOIN medical_act m
            ON m.id = lhma.medical_act_id
    WHERE p.cabinet_id = 1 AND p.daily_checking = true;

-- Idem avec moins d'infos => Visite quotidienne true et planned_date = date
SELECT p.* FROM patient p
    WHERE daily_checking = true;

SELECT p.firstname,
    p.lastname,
    p.id AS patientID,
    l.id AS logbookID,
    l.observations,
    m.id AS actID,
    m.name AS actNAME
    FROM patient p
        JOIN logbook l
            ON p.id = l.patient_id
        JOIN logbook_has_medical_act lhma
            ON l.id = lhma.logbook_id
        JOIN medical_act m
            ON m.id = lhma.medical_act_id
    WHERE p.cabinet_id = 1 
        AND (p.daily_checking = true
        OR l.planned_date = '2021-01-28');

--ANCIEN TOURNEE
-- // Faire un appel pour avoir tous les patients qui ont daily_checking = true (avec leur logbook
--         const patients = await client.query(`SELECT p.firstname,
--         lastname,
--         p.id AS patientID,
--         l.id AS logbookID,
--         l.observations,
--         m.id AS actID,
--         m.name AS actNAME
--         FROM patient p
--             JOIN logbook l
--                 ON p.id = l.patient_id
--             JOIN logbook_has_medical_act lhma
--                 ON l.id = lhma.logbook_id
--             JOIN medical_act m
--                 ON m.id = lhma.medical_act_id
--         WHERE p.cabinet_id = $1 
--             AND (p.daily_checking = true
--             OR l.planned_date = $2);`, [cabinet_id, date]);

--         // console.log(patients, "patients"); patient.rows
        
--         // Créé la tournée en liant tourID et patientID pour chaque ligne
        
--         for (let patient of patients.rows) {
--             await client.query(`INSERT INTO tour_has_patient(tour_id, patient_id) VALUES ($1,$2)`, [tourID, patient.patientid]);
--         }

--         const result = await client.query(`SELECT thp.*,
--         p.firstname,
--         p.lastname,
--         l.id AS logbook_id,
--         m.id AS medical_act_id,
--         m.name AS actNAME
--         FROM tour_has_patient thp
--             JOIN patient p
--                 ON p.id = thp.patient_id
--             JOIN logbook l
--                 ON p.id = l.patient_id
--             JOIN logbook_has_medical_act lhma
--                 ON l.id = lhma.logbook_id
--             JOIN medical_act m
--                 ON m.id = lhma.medical_act_id
--         WHERE thp.tour_id = $1`, [tourID]);

--         console.log(result.rows);

--         return result.rows;

-- Logbook à la date
SELECT p.lastname,
        p.id AS patient_id,
        l.id AS logbook_id,
        l.observations,
        m.id AS actID,
        m.name AS actNAME
        FROM patient p
            JOIN logbook l
                ON p.id = l.patient_id
            JOIN logbook_has_medical_act lhma
                ON l.id = lhma.logbook_id
            JOIN medical_act m
                ON m.id = lhma.medical_act_id
        WHERE p.cabinet_id = 1
        AND l.planned_date = '2021-01-28';

FROM logbook 
WHERE planned_date = '2021-01-28';

-- patient réccurent sans logbook à la date
SELECT DISTINCT p.firstname,
        lastname,
        p.id AS patient_id,
        p.number_daily_checking
        FROM patient p
            JOIN logbook l
                ON p.id = l.patient_id
        WHERE p.cabinet_id = 1 
            AND p.daily_checking = true
            AND l.planned_date <> '2021-01-28'
GROUP BY p.id;

-- Version avec ou pour les patients sans logbook
SELECT DISTINCT p.firstname,
        lastname,
        p.id AS patient_id,
        p.number_daily_checking
        FROM patient p
            JOIN logbook l
                ON p.id = l.patient_id
        WHERE p.cabinet_id = 2 
            AND p.daily_checking = true
            OR ( l.planned_date <> '2021-01-29'
            AND p.daily_checking = true AND p.cabinet_id = 2)
GROUP BY p.id;

-- ouvrir un logbook pour les patients sans logbook à la date 
-- et ajouter le tag 1 - soins infirmiers
INSERT INTO logbook(creation_date, planned_date, daily, nurse_id, patient_id) VALUES
('2021-01-28', '2021-01-28', true, nurse_id, );

-- Récupère les infos de la tournée avec l'ordre des patients et l'envoyer au front
SELECT thp.*,
    p.firstname,
    p.lastname,
    l.id AS logbook_id,
    l.planned_date AS logbook_planned_date,
    m.id AS medical_act_id,
    m.name AS medical_act_name
    FROM tour_has_patient thp
        JOIN patient p
            ON p.id = thp.patient_id
        JOIN logbook l
            ON p.id = l.patient_id
        JOIN logbook_has_medical_act lhma
            ON l.id = lhma.logbook_id
        JOIN medical_act m
            ON m.id = lhma.medical_act_id
    WHERE thp.tour_id = 2
        AND l.planned_date = '2021-01-28';

