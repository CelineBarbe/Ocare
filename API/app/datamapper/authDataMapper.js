const client = require('./client');

const authDataMapper = {

    async getUserByEmail(email) {

        const result = await client.query(`
        SELECT nurse.id, nurse.password FROM nurse 
            WHERE email = $1`, [email]);

        if (result.rowCount == 0) {

            return null;
        }

        return result.rows[0];
    },

    async getUser(idUser) {

        // const result = await client.query(`
        // SELECT nurse.* FROM nurse 
        //     WHERE id = $1`, [idUser]);

        // if (result.rowCount == 0) {
        //     return null;
        // }

        let result = await client.query(`
        SELECT nwp.*,
            chs.cabinet_id AS default_cabinet
            FROM nurse_without_password nwp
                JOIN cabinet_has_nurse chs
                    ON nwp.id = chs.nurse_id
            WHERE nwp.id = $1
            AND chs.default_cabinet = true`, [idUser]);

        // If user has a default cabinet
        if(result.rowCount != 0) {
            // user with default cabinet
            return result.rows[0];
        }

        // user without default_cabinet
        result = await client.query(`SELECT nwp.* FROM nurse_without_password nwp WHERE id = $1`, [idUser]);

        result.rows[0].default_cabinet = null;

        return result.rows[0];
    },

    async getUserAuto(id) {

        let result = await client.query(`SELECT * FROM nurse_without_password WHERE id = $1`, [id]);

        if (result.rowCount == 0) {
            return null;
        }

        const defaultCabinet = await client.query(`
        SELECT nwp.*,
            chs.cabinet_id AS default_cabinet
            FROM nurse_without_password nwp
                JOIN cabinet_has_nurse chs
                    ON nwp.id = chs.nurse_id
            WHERE nwp.id = $1
            AND chs.default_cabinet = true;
        `, [result.rows[0].id]);

        if(defaultCabinet.rowCount != 0) {
            // user with default cabinet
            return defaultCabinet.rows[0];
        }

        // user without default_cabinet
        result.rows[0].default_cabinet = null;

        return result.rows[0];
    },

    async getUserAutoTest(id) {

        let result = await client.query(`SELECT * FROM nurse_without_password WHERE id = $1`, [id]);

        if (result.rowCount == 0) {
            return null;
        }

        const defaultCabinet = await client.query(`
        SELECT nwp.*,
            chs.cabinet_id AS default_cabinet
            FROM nurse_without_password nwp
                JOIN cabinet_has_nurse chs
                    ON nwp.id = chs.nurse_id
            WHERE nwp.id = $1
            AND chs.default_cabinet = true;
        `, [result.rows[0].id]);

        if(defaultCabinet.rowCount != 0) {
            // user with default cabinet
            return defaultCabinet.rows[0];
        }

        // user without default_cabinet
        result.rows[0].default_cabinet = null;

        return result.rows[0];
    },

    async createUser(userInfo) {

        const { email, password } = userInfo;

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
