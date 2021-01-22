const client = require('./client');

const patientDataMapper = {
    async getAllPatient(idCabinet) {
        const result = await client.query(`SELECT * FROM patient WHERE cabinet_id = $1`, [idCabinet]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getPatientById(id) {
        const result = await client.query(`SELECT * FROM patient WHERE id = $1`, [id]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async createPatient(patientInfo, idCabinet) {
        const { firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking } = patientInfo;
        // is patient already exist ?
        const isAlreadyPatient = await client.query(`SELECT * FROM patient WHERE firstname = $1 AND lastname = $2 AND birthdate = $3`, [firstname, lastname, birthdate]);
        if (isAlreadyPatient.rowCount != 0) {
            return null;
        }
        //question du number daily checking ???
        // save patient
        const result = await client.query(`INSERT INTO patient(firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking, cabinet_id ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,[
            firstname,
            lastname,
            birthdate,
            gender,
            address,
            zip_code,
            city,
            phone_number,
            pathology,
            daily_checking,
            idCabinet,
        ]);
        return result.rows[0];
    },

    async updatePatientByid(idPatient, patientInfo) {
        const { firstname, lastname, birthdate, gender, address, zip_code, city, phone_number, pathology, daily_checking } = patientInfo;
        const findPatient = await client.query(`SELECT * FROM patient WHERE id = $1`, [idPatient]);
        if (findPatient.rowCount == 0) {
            return null;
        }
        const result = await client.query(`UPDATE patient SET firstname = $1, lastname = $2, birthdate = $3, gender = $4, address = $5, zip_code = $6, city = $7, phone_number = $8, pathology = $9, daily_checking = $10 WHERE id = $11 `, [
            firstname,
            lastname,
            birthdate,
            gender,
            address,
            zip_code,
            city,
            phone_number,
            pathology,
            daily_checking,
            idPatient,
        ]);
        return result.rows[0];
    },

    async deletePatientByid(idPatient) {
        const findPatient = await client.query(`SELECT * FROM patient WHERE id = $1`, [idPatient]);
        if (findPatient.rowCount == 0) {
            return null;
        }
        const deleted = client.query(`DELETE FROM patient WHERE id = $1`, [idPatient]);
        return deleted.rows[0];

    },
};

module.exports = patientDataMapper;