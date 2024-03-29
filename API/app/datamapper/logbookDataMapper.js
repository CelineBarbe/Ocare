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

        const result = await client.query(`SELECT lwnid.*,
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
        FROM logbook_with_nurse_infos_documents lwnid
            JOIN patient p
                ON p.id = lwnid.patient_id
            JOIN cabinet c
                ON c.id = p.cabinet_id
        WHERE c.id = $1
        AND (lwnid.planned_date = $2
        OR lwnid.planned_date = $3)
        ORDER BY lwnid.creation_date DESC LIMIT 200`, [idCabinet, date, tomorrow]);

        return result.rows;
    },

    async getLogById(id) {
        const result = await client.query(`SELECT lwnid.*,
        p.firstname,
        p.lastname
        FROM logbook_with_nurse_infos_documents lwnid
            JOIN patient p
                ON lwnid.patient_id = p.id
        WHERE lwnid.id = $1`, [id]);


        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async createLog(logInfo) {

        let { planned_date, done_date, time, observations, daily, done, ending_date, nurse_id, patient_id, medical_act_name, document } = logInfo;
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
        
        const result = await client.query(`INSERT INTO logbook(creation_date, planned_date, time, done_date, observations, daily, done, ending_date, document, nurse_id, patient_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,[
            creation_date,
            planned_date,
            time,
            done_date,
            observations,
            daily,
            done,
            ending_date,
            document,
            nurse_id,
            patient_id
        ]);

        // -- Si on reçoit un medical act
        // 1 - Retrouver l'id de l'acte

        const findAct = await client.query(`SELECT * FROM medical_act WHERE name = $1`, [medical_act_name]);

        // 2 - On lie l'actID au loogbookID
        await client.query(`INSERT INTO logbook_has_medical_act(logbook_id, medical_act_id) VALUES($1, $2) RETURNING *`, [result.rows[0].id, findAct.rows[0].id]);

        // 3 - On renvoie les infos du logbook avec le nurse et le medical_act en +
        const logResult = await client.query(`SELECT * FROM logbook_with_nurse_infos_documents WHERE id = $1`, [result.rows[0].id]);

        return logResult.rows[0];
    },

    async updateLogByid(idLog, logInfo) {
        //pas de update de tag dans un premier temps
        const { observations, document, nurse_id, patient_id } = logInfo;

        const findLog = await client.query(`SELECT * FROM logbook WHERE id = $1 AND logbook.patient_id = $2`, [idLog, patient_id]);

        if (findLog.rowCount == 0) {
            return null;
        }

        // Modifie le logbook
        await client.query(`UPDATE logbook SET observations = $1, document = $2, nurse_id = $3 WHERE id = $4 RETURNING *`, [
            observations,
            document,
            nurse_id,
            idLog
        ]);

        // 3 - On renvoie les infos du logbook avec le nurse et le medical_act en +
        const logUpdated = await client.query(`SELECT * FROM logbook_with_nurse_infos_documents WHERE id = $1`, [idLog]);

        return logUpdated.rows;
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