const client = require('./client');

const patientDataMapper = {

    async getAllPatient(idCabinet) {

        const result = await client.query(`SELECT * FROM patient WHERE cabinet_id = $1`, [idCabinet]);
        if (result.rowCount == 0) {

            const result = { message: 'Aucun patient dans ce cabinet'};
            return result;
        }
        return result.rows;
    },

    async getPatientById(id) {

        // const result = await client.query(`SELECT * FROM patient WHERE id = $1`, [id]);

        // const result = await client.query(`SELECT * FROM patient JOIN logbook ON patient.id = logbook.patient_id WHERE patient.id = $1`, [id]);

        const result = await client.query(`SELECT p.id,
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
        JSON_AGG(logbook_with_nurse_infos) as logbook
        FROM patient p
            LEFT OUTER JOIN logbook_with_nurse_infos
                ON p.id = logbook_with_nurse_infos.patient_id 
        WHERE p.id = $1 GROUP BY p.id`, [id]);

        // const result = await client.query(`SELECT patient.*,
        // JSON_AGG(logbook) as logbook
        // FROM patient
        //     JOIN logbook
        //         ON patient.id = logbook.patient_id
        // WHERE patient.id = $1 GROUP BY patient.id`, [id]);

        if (result.rowCount == 0) {
            return null;
        }
        
        return result.rows;
    },

    // async find(info) {
    //     console.log('coucou');
    //     console.log(info, "info");
    // },

    async createPatient(patientInfo) {

        const { firstname, lastname, birthdate, gender, address, additional_address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id } = patientInfo;

        // is patient already exist ?
        const isAlreadyPatient = await client.query(`SELECT * FROM patient WHERE firstname = $1 AND lastname = $2 AND birthdate = $3 and cabinet_id = $4`, [firstname, lastname, birthdate, cabinet_id]);

        if (isAlreadyPatient.rowCount != 0) {
            return null;
        }

        // save patient
        const result = await client.query(`INSERT INTO patient(firstname, lastname, birthdate, gender, address, additional_address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking, cabinet_id ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13) RETURNING *`,[
            firstname,
            lastname,
            birthdate,
            gender,
            address,
            additional_address,
            zip_code,
            city,
            phone_number,
            pathology,
            daily_checking,
            number_daily_checking,
            cabinet_id,
        ]);

        return result.rows[0];
    },

    async updatePatientByid(idPatient, patientInfo) {

        const { firstname, lastname, birthdate, gender, address, additional_address, zip_code, city, phone_number, pathology, daily_checking, number_daily_checking } = patientInfo;

        const findPatient = await client.query(`SELECT * FROM patient WHERE id = $1`, [idPatient]);

        if (findPatient.rowCount == 0) {
            return null;
        }

        const result = await client.query(`UPDATE patient SET firstname = $1, lastname = $2, birthdate = $3, gender = $4, address = $5, additional_address = $6, zip_code = $7, city = $8, phone_number = $9, pathology = $10, daily_checking = $11, number_daily_checking = $12 WHERE id = $13 RETURNING *`, [
            firstname,
            lastname,
            birthdate,
            gender,
            address,
            additional_address,
            zip_code,
            city,
            phone_number,
            pathology,
            daily_checking,
            number_daily_checking,
            idPatient,
        ]);

        return result.rowCount;
    },

    async deletePatientByid(idPatient) {

        const findPatient = await client.query(`SELECT * FROM patient WHERE id = $1`, [idPatient]);

        if (findPatient.rowCount == 0) {
            return null;
        }

        const deleted = client.query(`DELETE FROM patient WHERE id = $1`, [idPatient]);

        return deleted.rowCount;

    },
};

module.exports = patientDataMapper;