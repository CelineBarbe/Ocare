const client = require('./client');
const { DateTime } = require('luxon');

const logbookDataMapper = {
    async getAllLogs(idCabinet) {
        // à revoir pour prendre en compte plutot la date prévue dans la table d'association
        const result = await client.query(`SELECT * FROM logbook JOIN patient ON logbook.patient_id=patient.id WHERE patient.cabinet_id = $1 ORDER BY creation_date DESC LIMIT 200`, [idCabinet]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getLogById(id) {
        const result = await client.query(`SELECT * FROM logbook WHERE id = $1`, [id]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async createLog(logInfo) {

        let { planned_date, done_date, observations, daily, done, ending_date, nurse_id, patient_id } = logInfo;
        // + info de l'act à ajouter via table d'association
        // save Log
        let creation_date =  Date.now();
        creation_date = DateTime.local().setZone("Europe/Paris");
        
        const result = await client.query(`INSERT INTO logbook(creation_date, planned_date, done_date, observations, daily, done, ending_date, nurse_id, patient_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *`,[
            creation_date,
            planned_date,
            done_date,
            observations,
            daily,
            done,
            ending_date,
            nurse_id,
            patient_id,
        ]);

        // Saved in Patient_has_logbook
        await client.query(`INSERT INTO patient_has_logbook(patient_id, logbook_id) VALUES
        ($1,$2)`, [patient_id, result.rows[0].id]);

        return result.rowCount;
    },

    async updateLogByid(idLog, logInfo) {
        //pas de update de tag dans un premier temps
        const { hour, observations, daily, done, gender, nurse_id, patient_id } = logInfo;
        const findLog = await client.query(`SELECT * FROM logbook WHERE id = $1`, [idLog]);
        if (findLog.rowCount == 0) {
            return null;
        }
        const result = await client.query(`UPDATE logbook SET hour = $1, observations = $2, daily = $3, done = $4, nurse_id = $5, patient_id = $6`, [
            hour,
            observations,
            daily,
            done,
            nurse_id,
            patient_id,
        ]);
        return result.rows[0];
    },

    async deleteLogByid(idLog) {
        const findLog = await client.query(`SELECT * FROM logbook WHERE id = $1`, [idLog]);
        if (findLog.rowCount == 0) {
            return null;
        }
        const deleted = client.query(`DELETE FROM logbook WHERE id = $1`, [idLog]);
        return deleted.rows[0];

    },
};

module.exports = logbookDataMapper;