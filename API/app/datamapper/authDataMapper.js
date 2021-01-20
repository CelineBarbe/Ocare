const client = require('./client');

const authDataMapper = {
    async getUser(email, password) {
        const result = await client.query(`
        SELECT nurse.*,
        chs.cabinet_id AS default_cabinet
            FROM nurse
                JOIN cabinet_has_nurse chs
            ON nurse.id = chs.nurse_id
            WHERE email = $1 
            AND password = $2`, [email, password]);

        if (result.rowCount == 0) {
            return null;
        }

        return result.rows[0];
    },

    async createUser(userInfo) {

        const { email, password} = userInfo;

        // is user already exist ?
        const isAlreadyUser = await client.query(`SELECT * FROM nurse WHERE email = $1 AND password = $2`, [email, password]);

        if (isAlreadyUser.rowCount != 0) {
            return null;
        }

        // save user
        const result = await client.query(`INSERT INTO nurse(siren_code, firstname, lastname, email, password, phone_number) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,[
            userInfo.siren_code,
            userInfo.firstname,
            userInfo.lastname,
            userInfo.email,
            userInfo.password,
            userInfo.phone_number
        ]);

        return result.rows[0];

    }
};

module.exports = authDataMapper;
