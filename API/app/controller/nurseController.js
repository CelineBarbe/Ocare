const nurseDataMapper = require('../datamapper/nurseDataMapper');

const nurseController = {

    async findAll(request, response, next) {
        try {
            const idCabinet = request.app.locals.userCurrentCabinet;

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
            console.log(error.message);
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
            console.log(updatedNurseProfil);

            response.json({ updatedNurseProfil });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    async delete(request, response, next) {
        
    },
};

module.exports = nurseController;