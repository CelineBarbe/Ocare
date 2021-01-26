const client = require('./client');
const { DateTime } = require('luxon');

const logbookDataMapper = {
    async getAllLogs(idCabinet) {
        
        // const result = await client.query(`SELECT l.*,
        // p.firstname,
        // p.lastname
        // FROM logbook l
        //     JOIN patient p
        //         ON p.id = l.patient_id
        //     JOIN cabinet c
        //         ON c.id = p.cabinet_id
        // WHERE c.id = $1
        // ORDER BY l.creation_date DESC LIMIT 200`, [idCabinet]);

        // const result = await client.query(`SELECT l.*,
        // p.firstname,
        // p.lastname,
        // p.birthdate,
        // p.gender,
        // p.address,
        // p.additional_address,
        // p.zip_code,
        // p.city,
        // p.phone_number,
        // p.pathology,
        // p.daily_checking,
        // p.number_daily_checking,
        // p.cabinet_id
        // FROM logbook l
        //     JOIN patient p
        //         ON p.id = l.patient_id
        //     JOIN cabinet c
        //         ON c.id = p.cabinet_id
        // WHERE c.id = $1
        // ORDER BY l.creation_date DESC LIMIT 200`, [idCabinet]);

        // Get allLog avec medical Act
        const result = await client.query(`SELECT l.*,
        p.firstname,
        p.lastname,
        p.birthdate,
        p.gender,
        p.address,
        p.additional_address,
        p.zip_code,
        p.city,
        p.phone_number,
        p.pathology,
        p.daily_checking,
        p.number_daily_checking,
        p.cabinet_id,
        JSON_AGG(medical_act) as medical_act
        FROM logbook l
            JOIN patient p
                ON p.id = l.patient_id
            JOIN logbook_has_medical_act lhma
                ON l.id = lhma.logbook_id
            JOIN medical_act
                ON lhma.medical_act_id = medical_act.id
            JOIN cabinet c
                ON c.id = p.cabinet_id
        WHERE c.id = $1
        GROUP BY l.id, p.firstname, p.lastname, p.birthdate, p.gender, p.address, p.additional_address, p.zip_code, p.city, p.phone_number, p.pathology, p.daily_checking, p.number_daily_checking, p.cabinet_id
        ORDER BY l.creation_date DESC LIMIT 200`, [idCabinet]);

        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getAllLogsByDate(idCabinet, date) {
        
        // Tomorrow = date + 1
        const tomorrow = DateTime.fromISO(`${date}`).plus({days: 1}).toISODate();

        const result = await client.query(`SELECT l.*,
        p.firstname,
        p.lastname,
        p.birthdate,
        p.gender,
        p.address,
        p.additional_address,
        p.zip_code,
        p.city,
        p.phone_number,
        p.pathology,
        p.daily_checking,
        p.number_daily_checking,
        p.cabinet_id
        FROM logbook l
            JOIN patient p
                ON p.id = l.patient_id
            JOIN cabinet c
                ON c.id = p.cabinet_id
        WHERE c.id = $1
        AND (l.planned_date = $2
        OR l.planned_date = $3)
        ORDER BY l.creation_date DESC LIMIT 200`, [idCabinet, date, tomorrow]);

        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getLogById(id) {
        const result = await client.query(`SELECT l.*,
        p.firstname,
        p.lastname
        FROM logbook l
            JOIN patient p
                ON l.patient_id = p.id
        WHERE l.id = $1`, [id]);


        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async createLog(logInfo) {

        let { planned_date, done_date, time, observations, daily, done, ending_date, nurse_id, patient_id } = logInfo;
        // + info de l'act à ajouter via table d'association
        // save Log

        let creation_date =  Date.now();
    
        // milliseconds to Timestamps
        creation_date = DateTime.local().setZone("Europe/Paris");

        // Timestamps without hours
        creation_date = DateTime.fromISO(`${creation_date}`).toFormat('yyyy-MM-dd');

        // is planned_date = null then now()
        if (planned_date == null) {
            planned_date = DateTime.fromISO(`${creation_date}`).toFormat('yyyy-MM-dd');
        }
        
        const result = await client.query(`INSERT INTO logbook(creation_date, planned_date, time, done_date, observations, daily, done, ending_date, nurse_id, patient_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,[
            creation_date,
            planned_date,
            time,
            done_date,
            observations,
            daily,
            done,
            ending_date,
            nurse_id,
            patient_id
        ]);

        return result.rows[0];
    },

    async updateLogByid(idLog, logInfo) {
        //pas de update de tag dans un premier temps
        const { planned_date, done_date, time, observations, daily, done, ending_date, nurse_id, patient_id } = logInfo;

        const findLog = await client.query(`SELECT * FROM logbook WHERE id = $1 AND logbook.patient_id = $2`, [idLog, patient_id]);

        if (findLog.rowCount == 0) {
            return null;
        }

        const result = await client.query(`UPDATE logbook SET planned_date = $1, time = $2, done_date = $3, observations = $4, daily = $5, done = $6, ending_date = $7, nurse_id = $8 WHERE id = $9`, [
            planned_date,
            time,
            done_date,
            observations,
            daily,
            done,
            ending_date,
            nurse_id,
            idLog
        ]);

        return result.rowCount;
    },

    async deleteLogByid(idLog) {

        const findLog = await client.query(`SELECT * FROM logbook WHERE id = $1`, [idLog]);

        if (findLog.rowCount == 0) {
            return null;
        }

        const deleted = await client.query(`DELETE FROM logbook WHERE id = $1`, [idLog]);

        return deleted.rowCount;

    },

    async addMedicalAct(idLog, idAct) {
        
        const savedActToLog = await client.query(`INSERT INTO logbook_has_medical_act(logbook_id, medical_act_id) VALUES($1, $2) RETURNING *`, [idLog, idAct]);

        if (savedActToLog.rowCount == 0) {
            return null;
        }

        return savedActToLog.rows[0];
    },

    async deleteMedicalAct(actToLogID) {
        
        const findActToLog = await client.query(`SELECT * FROM logbook_has_medical_act WHERE id = $1`, [actToLogID]);

        if (findActToLog.rowCount == 0) {
            return null;
        }

        const deletedActToLog = await client.query(`DELETE FROM logbook_has_medical_act WHERE id = $1`, [actToLogID])
        
        return deletedActToLog.rowCount;
    },
};

module.exports = logbookDataMapper;