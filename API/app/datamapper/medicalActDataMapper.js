const client = require('./client');

const medicalActDataMapper = {
    async getAllActs() {
        const result = await client.query(`SELECT * FROM medical_act`);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows;
    },

    async getActById(id) {
        const result = await client.query(`SELECT * FROM medical_act WHERE id = $1`, [id]);
        if (result.rowCount == 0) {
            return null;
        }
        return result.rows[0];
    },

    async createAct(actInfo) {
        const { name, category } = actInfo;
        // is act already exist ?
        const isAlreadyAct = await client.query(`SELECT * FROM medical_act WHERE name = $1 AND category = $2`, [name, category]);
        if (isAlreadyAct.rowCount != 0) {
            return null;
        }
        // save Act
        const result = await client.query(`INSERT INTO medical_act(name, category) VALUES($1, $2) RETURNING *`,[
            name,
            category,
        ]);
        return result.rows[0];
    },

    async updateActById(id, actInfo) {
        const { name, category } = actInfo;

        //console.log(actInfo, id, 'medicalact datamapper' );

        const findAct = await client.query(`SELECT * FROM medical_act WHERE id = $1`, [id]);
        if (findAct.rowCount == 0) {
            return null;
        }
        const result = await client.query(`UPDATE medical_act SET name = $1, category = $2 WHERE id = $3 RETURNING *`,[
            name,
            category,
            id,
        ]);
        return result.rows[0];
    },

    async deleteActByid(id) {
        const findAct = await client.query(`SELECT * FROM medical_act WHERE id = $1`, [id]);
        if (findAct.rowCount == 0) {
            return null;
        }
        const deleted = client.query(`DELETE FROM medical_act WHERE id = $1 RETURNING *`, [id]);
        return deleted.rows[0];

    },
};

module.exports = medicalActDataMapper;