const client = require('./client');

const nurseDataMapper = {

    async updateNurseById(id, infoNurse) {

        const { siren_code, firstname, lastname, email, password, phone_number } = infoNurse;

        // update cabinet
        const updateNurse = await client.query(`
        UPDATE nurse SET siren_code = $1, firstname = $2, lastname = $3, email = $4, password = $5, phone_number = $6 WHERE nurse.id = $7`, [
            siren_code,
            firstname,
            lastname,
            email,
            password,
            phone_number,
            id
        ]);
        console.log('Coucou');
        if (updateNurse.rowCount == 0) {
            return null;
        }

        return updateNurse.rowCount;
    },

};

module.exports = nurseDataMapper;