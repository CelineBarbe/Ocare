const client = require('./client');
const { DateTime } = require('luxon');

const logbookDataMapper = {
    async getAllLogs(idCabinet) {
        
        const result = await client.query(`SELECT l.*,
        p.firstname,
        p.lastname
        FROM logbook l
            JOIN patient p
                ON p.id = l.patient_id
            JOIN cabinet c
                ON c.id = p.cabinet_id
        WHERE c.id = $1
        ORDER BY l.creation_date DESC LIMIT 200`, [idCabinet]);

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
        creation_date = DateTime.local().setZone("Europe/Paris");
        
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

        return result.rowCount;
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
};

module.exports = logbookDataMapper;