const client = require('./client');

const cabinetDataMapper = {
    async getAllCabinet(idUser) {
        
        const result = await client.query(`
        SELECT * FROM cabinet 
            JOIN cabinet_has_nurse chs
                ON cabinet.id = chs.cabinet_id 
            WHERE chs.nurse_id = $1`, [idUser]);

        if (result.rowCount == 0) {
            return null;
        }

        return result.rows;
    },

    async getCabinetById(id) {

        const result = await client.query(`
        SELECT c.id,
            c.name,
            c.address,
            c.zip_code,
            c.city,
            c.phone_number,
            c.owner_id,
            nurse.id,
            nurse.siren_code,
            nurse.firstname,
            nurse.lastname,
            nurse.email,
        nurse.phone_number
    FROM cabinet c
        JOIN cabinet_has_nurse chs
            ON c.id = chs.cabinet_id 
        JOIN nurse
            ON nurse.id = chs.nurse_id
    WHERE c.id = $1`, [id]);

        if(result.rowCount == 0) {
            return null;
        }

        return result.rows;
    },

    async createCabinet(infoCab) {

        const { name, address, zip_code, city, phone_number, pin_code, userID } = infoCab;

        // is cabinet already exist ?
        const isAlreadyCabinet = await client.query(`SELECT * FROM cabinet WHERE name = $1 AND address = $2 AND zip_code = $3 AND phone_number = $4`, [ name, address, zip_code, city, phone_number]);

        if (isAlreadyCabinet.rowCount != 0) {
            return null;
        }

        // save cabinet
        const result = await client.query(`INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, nurse_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [
            name,
            address,
            zip_code,
            city,
            phone_number,
            pin_code,
            userID
        ]);

        return result.rows[0];
    },

    async addNurseToCabinet(idCab, idNurse, pinCodeCab) {

        // check pinCode to save the nurse
        const enabledCode = await client.query(`SELECT * FROM cabinet WHERE id = $1 AND pin_code = $2 RETURNING *`, [idCab, pinCodeCab]);

        if (!enabledCode) {
            return null;
        }
        
        const result = await client.query(`INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id) VALUES($1, $2) RETURNING *`, [idCab, idNurse]);

        return result.rows[0];
    },

    async updateNurseToCabinet() {

    },

    async updateCabinetByid(idCab) {
        // On vérifie qu'il s'agit bien du cabinet Owner pour lancer la modif

        // Faire une boucle pour lancer un update pour chaque champ
        // Tester récupérer l'objet faire une copie et update
        // checker que c'est bien le propriétaire qui le demande
    },

    async deleteCabinetByid() {

    },
};

module.exports = cabinetDataMapper;