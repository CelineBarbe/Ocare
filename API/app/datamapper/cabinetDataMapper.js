const client = require('./client');

const cabinetDataMapper = {
    async getAllCabinet(idUser) {
                
        const result = await client.query(`
            SELECT all_cabinet.* 
                FROM all_cabinet 
                JOIN cabinet_has_nurse
                    ON cabinet_has_nurse.cabinet_id = all_cabinet.id
                WHERE cabinet_has_nurse.nurse_id = $1 AND cabinet_has_nurse.allowed = true`, [idUser]);

        if (result.rowCount == 0) {
            return null;
        }

        // Add to cabinet Owner
        for (let cab of result.rows) {

            cab.email = "";
            for (let nurse of cab.nurses) {
                if (nurse.id == cab.owner_id) {
                    cab.email = nurse.email;
                }
            }
        }

        return result.rows;
    },

    async getCabinetById(id, userID, defaultCab) {

        let result = await client.query(`SELECT * FROM all_cabinet WHERE all_cabinet.id = $1`, [id])

            if(result.rowCount == 0) {
                return null;
            }

        // Remove default_cabinet
        await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = false WHERE cabinet_id = $1 AND nurse_id = $2`, [defaultCab, userID]);

        // Save this cabinet like current_cab
        await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = true WHERE cabinet_id = $1 AND nurse_id = $2`, [id, userID]);

        // Add owner_id email
        const ownerEmail = await client.query(`SELECT nurse.email FROM nurse WHERE nurse.id = $1`, [result.rows[0].owner_id]);

        result.rows[0].email = ownerEmail.rows[0].email;

        return result.rows;
    },

    async createCabinet(infoCab) {

        const { name, address, zip_code, city, phone_number, pin_code, owner_id } = infoCab;

        // is cabinet already exist ?
        const isAlreadyCabinet = await client.query(`SELECT * FROM cabinet WHERE name = $1 AND address = $2 AND zip_code = $3 AND city = $4 AND phone_number = $5`, [ name, address, zip_code, city, phone_number]);

        if (isAlreadyCabinet.rowCount != 0) {
            return null;
        }

        // save cabinet
        const result = await client.query(`INSERT INTO cabinet(name, address, zip_code, city, phone_number, pin_code, owner_id) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *`, [
            name,
            address,
            zip_code,
            city,
            phone_number,
            pin_code,
            owner_id
        ]);

        // Remove default_cabinet
        await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = false WHERE nurse_id = $1`, [owner_id]);

        // saved nurse to cabinet
        await client.query(`INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id, default_cabinet) VALUES($1, $2, true) RETURNING *`, [result.rows[0].id, result.rows[0].owner_id]);

        return result.rows[0];
    },

    async subscribeToCabinet(name, idNurse, pinCodeCab) {

        // check pinCode to save the nurse
        const enabledCode = await client.query(`SELECT * FROM cabinet WHERE name ILIKE $1 AND pin_code = $2`, [name, pinCodeCab]);


        if (enabledCode.rowCount == 0) {
            return null;
        }
        
        // Vérifie si il a déjà des cabinet pour les passer à false
        const hasDefaultCabinet = await client.query(`SELECT * FROM cabinet_has_nurse WHERE cabinet_has_nurse.nurse_id = $1`, [idNurse]);

        if (hasDefaultCabinet.rowCount != 0) {
            // Remove default_cabinet
            await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = false WHERE nurse_id = $1`, [idNurse]);
        }

        const result = await client.query(`INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id, default_cabinet) VALUES($1, $2, true) RETURNING *`, [enabledCode.rows[0].id, idNurse]);

        let cabinetAdded = await client.query(`SELECT * FROM all_cabinet WHERE all_cabinet.id = $1`, [result.rows[0].cabinet_id]);

        // Add owner_id email
        const ownerEmail = await client.query(`SELECT nurse.email FROM nurse WHERE nurse.id = $1`, [cabinetAdded.rows[0].owner_id]);

        cabinetAdded.rows[0].email = ownerEmail.rows[0].email;

        return cabinetAdded.rows[0];
    },

    async addNurseToCabinet(emailNurse, ownerID, cabinetID , pin_code) {

        // 1 On vérifie qu'il s'agit bien du owner du cabinet
        const cabinet = await client.query(`SELECT * FROM cabinet WHERE cabinet.id = $1 AND cabinet.owner_id = $2 AND cabinet.pin_code = $3`, [cabinetID, ownerID, pin_code]);

        if (cabinet.rowCount == 0) {
            return null;
        }

        // Trouvez le nurse à ajouter
        const nurse = await client.query(`SELECT * FROM nurse_without_password nwp WHERE nwp.email = $1`, [emailNurse]);

        if (nurse.rowCount == 0) {
            const result = { message: 'Aucun infirmier n\'a été trouvé'};
            return result;
        }

        // Association du nurse au cabinet
        await client.query(`INSERT INTO cabinet_has_nurse(cabinet_id, nurse_id, default_cabinet) VALUES($1, $2, true) RETURNING *`, [cabinet.rows[0].id, nurse.rows[0].id]);

        return nurse.rows[0];

    },

    async updateNurseToCabinet(info) {

        console.log(info);
        // check which default cabinet is true
        const defaultCab = await client.query(`SELECT * FROM cabinet_has_nurse JOIN nurse ON nurse.id = cabinet_has_nurse.nurse_id WHERE nurse.id = $1 AND default_cabinet = true`, [info.nurse_id]);

        console.log(defaultCab, "defaultCab");

        if (defaultCab.rowCount == 1) {
            // this cabinet become false
            await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = false WHERE nurse_id = $1 AND cabinet_id = $2`, [defaultCab.rows[0].nurse_id, defaultCab.rows[0].cabinet_id]);

            const result = await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = true WHERE cabinet_id = $1 AND nurse_id = $2`, [info.cabinet_id, info.nurse_id]);

            return result.rowCount;

        } else if (defaultCab.rowCount == 0) {

            const result = await client.query(`UPDATE cabinet_has_nurse SET default_cabinet = true WHERE cabinet_id = $1 AND nurse_id = $2`, [info.cabinet_id, info.nurse_id]);

            if (result.rowCount == 1) {
                return result.rowCount;
            }
            return null;
        }

    },

    async unsubscribe(idCab, idNurse) {
        
        // const result = await client.query(`UPDATE cabinet_has_nurse chn SET allowed = false, default_cabinet = false WHERE chn.cabinet_id = $1 AND chn.nurse_id = $2`, [idCab, idNurse]);

        const result = await client.query(`DELETE FROM cabinet_has_nurse chn WHERE chn.cabinet_id = $1 AND chn.nurse_id = $2`, [idCab, idNurse]);

        if (result.rowCount == 0) {
            return null;
        }

        return result.rowCount;
    },

    async updateCabinetById(idCab, infoCab, userID) {

        const { name, address, zip_code, city, phone_number, pin_code } = infoCab;

        const cabinet = await client.query(`SELECT * FROM cabinet WHERE cabinet.id = $1 AND cabinet.owner_id = $2`, [idCab, userID]);

        if (cabinet.rowCount == 0) {
            return null;
        }

        // update cabinet
        const updateCab = await client.query(`
        UPDATE cabinet SET name = $1, address = $2, zip_code = $3, city = $4, phone_number = $5, pin_code = $6 WHERE cabinet.id = $7 RETURNING *`, [
            name,
            address,
            zip_code,
            city,
            phone_number,
            pin_code,
            idCab
        ]);

        return updateCab.rowCount;
    },

    async deleteCabinetByid(idCab, userID) {

        const cabinet = await client.query(`SELECT * FROM cabinet WHERE cabinet.id = $1 AND cabinet.owner_id = $2`, [idCab, userID]);

        if (cabinet.rowCount == 0) {
            return null;
        }

        // delete cabinet
        const deleteCab = await client.query(`DELETE FROM cabinet WHERE id = $1`, [idCab]);

        return deleteCab.rowCount;
    },
};

module.exports = cabinetDataMapper;