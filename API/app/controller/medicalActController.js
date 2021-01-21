const medicalActDataMapper = require('../datamapper/medicalActDataMapper');

const medicalActController = {
    async findAll(_, response, next) {
        try {
            const acts = await medicalActDataMapper.getAllActs();
            if(!acts) {
                response.locals.notFound = "Aucun acts disponibles";
                next();
                return;
            }
            response.json(acts);
        } catch (error) {
            next(error);
        }
    },
    async findById(request, response, next) {
        try {
            const { idAct } = request.params;
            const act = await medicalActDataMapper.getActById(idPatient);
            if(!act) {
                response.locals.notFound = "acte introuvable";
                next();
                return;
            }
            response.json({ act });
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const actInfo = request.body;
            const savedAct = await medicalActDataMapper.createAct(actInfo);
            if(!savedAct) {
                response.locals.notFound = "Act déjà présent !";
                next();
                return;
            }
            response.json({ savedAct });
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { idAct } = request.params;
            const actInfo = request.body;
            const updatedAct = await medicalActDataMapper.updateActByid(idAct, actInfo);
            if(!updatedAct) {
                response.locals.notFound = "acte introuvable!";
                next();
                return;
            }
            response.json({ updatedAct });
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { idAct } = request.params;
            const deletedAct = await medicalActDataMapper.deleteActByid(idAct);
            if(!deletedAct) {
                response.locals.notFound = "patient introuvable!";
                next();
                return;
            }
            response.json({ deletedAct });
            
        } catch (error) {
            next(error);
        }
    }
    /* async addPatient(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }, */

    /* async updatePatient(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }, */

    
};

module.exports = medicalActController;