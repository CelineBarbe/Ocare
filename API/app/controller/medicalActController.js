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
            const { id } = request.params;
            const act = await medicalActDataMapper.getActById(id);
            if(!act) {
                response.locals.notFound = "Acte introuvable";
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
                response.locals.notFound = "Cet acte existe déjà";
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
            const { id } = request.params;
            const actInfo = request.body;
            const updatedAct = await medicalActDataMapper.updateActById(id, actInfo);
            if(!updatedAct) {
                response.locals.notFound = "Acte introuvable!";
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
            const { id } = request.params;
            const deletedAct = await medicalActDataMapper.deleteActByid(id);
            if(!deletedAct) {
                response.locals.notFound = "acte introuvable!";
                next();
                return;
            }
            response.json({ deletedAct });
            
        } catch (error) {
            next(error);
        }
    }
   
};

module.exports = medicalActController;