const client = require('./client');

const tourDataMapper = {

    async create(info) {

        const { date, information, nurse_id, cabinet_id } = info;

        // 1 - Créer la tournée et récupérer l'objet pour son id -- OK
        const createTour = await client.query(`INSERT INTO tour(date, information, nurse_id, cabinet_id) VALUES($1, $2, $3, $4) RETURNING *`, [date, information, nurse_id, cabinet_id]);

        const tourID = createTour.rows[0].id

        // 2 - Faire un appel pour tous les patients qui ont un logbook à la date de la tournée
        const patients = await client.query(`SELECT p.lastname,
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
        WHERE p.cabinet_id = $1
        AND l.planned_date = $2`, [cabinet_id, date]);

        // console.log(patients, "patients"); patient.rows
        // console.log(patients, "patients"); // 2 patients 19 Labbé book 26 & 24 Garnier book 27
        const patientsWithLogbook = patients.rows;

        // 3 - Faire un appel pour avoir tous les patients qui ont daily_checking = true et qui n'ont pas de loggbook à la date du jour
        const patientsWithoutLogbook = await client.query(`SELECT DISTINCT p.firstname,
        lastname,
        p.id AS patient_id,
        p.number_daily_checking
        FROM patient p
            JOIN logbook l
                ON p.id = l.patient_id
        WHERE p.cabinet_id = $1 
            AND p.daily_checking = true
            AND l.planned_date <> $2
        GROUP BY p.id`, [cabinet_id, date]);

        console.log(patientsWithoutLogbook, 'patient sans logbook');
        
        // Créé la tournée en liant tourID et patientID pour chaque ligne
        
        // for (let patient of patients.rows) {
        //     await client.query(`INSERT INTO tour_has_patient(tour_id, patient_id) VALUES ($1,$2)`, [tourID, patient.patientid]);
        // }

        // const result = await client.query(`SELECT thp.*,
        // p.firstname,
        // p.lastname,
        // l.id AS logbook_id,
        // m.id AS medical_act_id,
        // m.name AS actNAME
        // FROM tour_has_patient thp
        //     JOIN patient p
        //         ON p.id = thp.patient_id
        //     JOIN logbook l
        //         ON p.id = l.patient_id
        //     JOIN logbook_has_medical_act lhma
        //         ON l.id = lhma.logbook_id
        //     JOIN medical_act m
        //         ON m.id = lhma.medical_act_id
        // WHERE thp.tour_id = $1`, [tourID]);

        // console.log(result.rows);

        return patients.rows;
    }
};

module.exports = tourDataMapper;