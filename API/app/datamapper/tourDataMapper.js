const client = require('./client');
const { DateTime } = require('luxon');

const tourDataMapper = {

    async create(info) {

        const { date, information, nurse_id, cabinet_id } = info;

        // 1 - Créer la tournée et récupérer l'objet pour son id -- OK
        const createTour = await client.query(`INSERT INTO tour(date, information, nurse_id, cabinet_id) VALUES($1, $2, $3, $4) RETURNING *`, [date, information, nurse_id, cabinet_id]);

        if (createTour.rowCount == 0) {
            return null;
        }

        const tourID = createTour.rows[0].id;

        // 2 - Faire un appel pour avoir tous les patients qui ont daily_checking = true et qui n'ont pas de logbook à la date du jour ou qui n'ont jamais encore eu de logbook
        let patientsWithoutLogbook = await client.query(`SELECT DISTINCT p.firstname,
        lastname,
        p.id AS patient_id,
        p.number_daily_checking
        FROM patient p
            LEFT OUTER JOIN logbook l
                ON p.id = l.patient_id
        WHERE p.cabinet_id = $1 
            AND p.daily_checking = true
            AND (l.planned_date <> $2
                OR l.id IS NULL)
        GROUP BY p.id, l.id`, [cabinet_id, date]);

        if(patientsWithoutLogbook) {
            
            // 3 - Ouvrir un logbook pour les patients qui n'en ont pas avec un acte soins infirmiers
            for (let patient of patientsWithoutLogbook.rows) {
                const result = await client.query(`INSERT INTO logbook(creation_date, planned_date, daily, observations, nurse_id, patient_id) VALUES ($1, $1, true, 'visite quotidienne - soins infirmiers', $2, $3) RETURNING *`, [date, nurse_id, patient.patient_id]);
    
                const logbookID = result.rows[0].id;
    
                await client.query(`INSERT INTO logbook_has_medical_act(logbook_id, medical_act_id) VALUES ($1, 1)`, [logbookID]);
            }
        }

        // 4 - Faire un appel pour récupérer tous les patients qui ont un logbook à la date de la tournée
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

        // if (patients.rowCount == 0) {
        //     return null;
        // }

        console.log(patients, "patient pour la tournée");

        // console.log(patients, "patients"); patient.rows
        // console.log(patients, "patients"); // 2 patients 19 Labbé book 26 & 24 Garnier book 27
        // 5 - Créer la tournée en liant tourID et patientID pour chaque ligne
        
        let order_tour = 1;

        for (let patient of patients.rows) {
            await client.query(`INSERT INTO tour_has_patient(tour_id, patient_id, order_tour) VALUES ($1, $2, $3)`, [tourID, patient.patient_id, order_tour]);

            order_tour++;
        }

        // 6 - Renvoyer les infos de la tournée créée
        const result = await client.query(`SELECT thp.*,
        p.firstname,
        p.lastname,
        l.id AS logbook_id,
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
        WHERE thp.tour_id = $1
            AND l.planned_date = $2 ORDER BY thp.order_tour ASC`, [tourID, date]);

        // if (result.rowCount == 0) {
        //     return null;
        // }

        // Suppressions de l'affichage des logbooks en double
        let tab = [];

        let idTour = null;
        let logbookId = null;

        for (let el of result.rows) {
            if(el.id != idTour && el.logbook_id != logbookId) {
                tab.push(el);

                // Mets à jour le check
                idTour = el.id;
                logbookId = el.logbook_id;
            }
        };

        return tab;
    },

    async findByDate(date, idCabinet) {

        const result = await client.query(`SELECT thp.*,
        p.firstname,
        p.lastname,
        l.id AS logbook_id,
        m.id AS medical_act_id,
        l.done,
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
            JOIN tour t
                ON t.id = thp.tour_id
        WHERE t.date = $1
            AND p.cabinet_id = $2
            AND l.planned_date = $1 ORDER BY thp.order_tour ASC`, [date, idCabinet]);

        // Suppressions de l'affichage des logbooks en double
        let tab = [];

        let idTour = null;
        let logbookId = null;

        for (let el of result.rows) {
            if(el.id != idTour && el.logbook_id != logbookId) {
                tab.push(el);

                // Mets à jour le check
                idTour = el.id;
                logbookId = el.logbook_id;
            }
        };

        return tab;

    },

    async updatePatient(tour) {
        
        // Tableau de la tournée avec les patients
        const tourTab = tour.tour;
        
        // Pour les patient dont l'id de Tour has patient est null on les ajoute à la tournée et pour les autres on update leur order
        for (let el of tourTab) {
            // Si id = null
            if (el.id == null) {
                await client.query(`INSERT INTO tour_has_patient(tour_id, patient_id, order_tour) VALUES ($1, $2, $3)`, [el.tour_id, el.patient_id, el.order_tour]);
            } else {
                await client.query(`UPDATE tour_has_patient SET order_tour = $1 WHERE id = $2`, [el.order_tour, el.id]);
            }
        }

        return tourTab;
    },

    async updateLog(idLog) {

        let creation_date =  Date.now();
    
        // milliseconds to Timestamps
        creation_date = DateTime.local().setZone("Europe/Paris");

        // Timestamps without hours
        done_date = DateTime.fromISO(`${creation_date}`).toFormat('yyyy-MM-dd');

        const logIsDone = await client.query(`UPDATE logbook SET done = true, done_date = $1 WHERE id = $2`, [done_date, idLog]);

        if (logIsDone.rowCount == 0) {
            return null;
        }

        return logIsDone.rowCount;
    },

    async deletePatient(idTour, idLog) {

        // 1 - Supprime le tour_has_patient (tour_id))
        const deletePatient = await client.query(`DELETE FROM tour_has_patient WHERE id = $1`, [idTour]);

        if (deletePatient.rowCount == 0) {
            return null;
        }

        // 2 - Supprime le logbook
        const deleteLogbook = await client.query(`DELETE FROM logbook WHERE id = $1`, [idLog]);

        if (deleteLogbook.rowCount == 0) {
            return null;
        }

        return deleteLogbook.rowCount;
    }
};

module.exports = tourDataMapper;