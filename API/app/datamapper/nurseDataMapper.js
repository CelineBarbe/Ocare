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

        const { firstname, lastname, email, avatar, phone_number } = infoNurse;

        // update cabinet
        const updateNurse = await client.query(`
        UPDATE nurse SET firstname = $1, lastname = $2, email = $3, phone_number = $4, avatar = $5 WHERE nurse.id = $6`,
        [
            firstname,
            lastname,
            email,
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