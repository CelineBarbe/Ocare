
-- Récupérer le cabinet par défaut du user connecté
SELECT nurse.*,
chs.cabinet_id AS default_cabinet
FROM nurse
    JOIN cabinet_has_nurse chs
        ON nurse.id = chs.nurse_id
WHERE email = 'olivier@raynal.com' 
AND password = 'gyefgecz'
AND chs.default_cabinet = true;

-- cabinet.getAllCabinet() => Récupérer tous les cabinets pour un userID, + nb Patients, + staff

SELECT c.id,
    c.name,
    c.address,
    c.zip_code,
    c.city,
    c.phone_number,
    c.owner_id,
    JSON_AGG(nurse) FROM cabinet c
    JOIN cabinet_has_nurse chs
        ON c.id = chs.cabinet_id
    JOIN nurse
        ON nurse.id = chs.nurse_id
    WHERE chs.nurse_id = 1
    GROUP BY c.id;
    ;

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

