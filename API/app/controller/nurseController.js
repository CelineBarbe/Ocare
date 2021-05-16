const nurseDataMapper = require('../datamapper/nurseDataMapper');
// const bcrypt = require('bcrypt');
// const saltRounds = 10;

const nurseController = {

    async findAll(request, response, next) {
        try {

            const idCabinet = response.locals.default_cabinet;

            const nurses = await nurseDataMapper.getAllNurse(idCabinet);

            if(!nurses) {
                response.locals.notFound = "Aucun nurses dans ce cabinet";
                next();
                return;
            }

            response.json(nurses);

        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            const { id } = request.params;

            const nurse = await nurseDataMapper.getNurseById(id);

            if(!nurse) {
                response.locals.notFound = "Aucun nurses dans ce cabinet";
                next();
                return;
            }

            response.json(nurse);

        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            
            const id = parseInt(request.params.id, 10);
            const nurseInfoToUpdate = request.body;

            const updatedNurseProfil = await nurseDataMapper.updateNurseById(id, nurseInfoToUpdate);

            if (!updatedNurseProfil) {
                response.locals.notFound = "Erreur - profil non sauvegardé";
                next();
                return;
            }

            response.json({ updatedNurseProfil });

        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        
    },
};

module.exports = nurseController;