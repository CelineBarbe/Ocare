const nurseDataMapper = require('../datamapper/nurseDataMapper');

const nurseController = {

    async findAll(request, response, next) {
        
    },

    async findById(request, response, next) {

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