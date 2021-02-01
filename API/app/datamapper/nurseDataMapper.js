const client = require('./client');

const nurseDataMapper = {

    async getAllNurse(id) {

        const result = await client.query(`SELECT nurse.* FROM nurse JOIN cabinet_has_nurse ON cabinet_has_nurse.nurse_id = nurse.id WHERE cabinet_id = $1`, [id]);

        if (result.rowCount == 0) {
            return null;
        }

        return result.rows;
    },

    async getNurseById(id) {

        const result = await client.query(`SELECT * FROM nurse WHERE id = $1`, [id]);

        if (result.rowCount == 0) {
            return null;
        }
        
        return result.rows[0];
    },

    async updateNurseById(id, infoNurse) {

        const { siren_code, firstname, lastname, email, password, avatar, phone_number } = infoNurse;

        // update cabinet
        const updateNurse = await client.query(`
        UPDATE nurse SET siren_code = $1, firstname = $2, lastname = $3, email = $4, password = $5, phone_number = $6, avatar = $7 WHERE nurse.id = $8`,
        [
            siren_code,
            firstname,
            lastname,
            email,
            password,
            phone_number,
            avatar,
            id
        ]);
        
        if (updateNurse.rowCount == 0) {
            return null;
        }

        return updateNurse.rowCount;
    },

};

module.exports = nurseDataMapper;