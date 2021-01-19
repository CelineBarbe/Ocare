const cabinetDataMapper = require('../datamapper/cabinetDataMapper');

const cabinetController = {

    async findAll(_, response, next) {
        try {
            const cabinets = await cabinetDataMapper.getAllCabinet();

            if(!cabinets) {
                response.locals.notFound = 'Aucun cabinet';
                next();
                return;
            }

            response.json({ cabinets });

        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            const { idCab } = request.params;

            const cabinet = await cabinetDataMapper.getCabinetById(idCab);

            if(!cabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            response.json({ cabinet });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const cabinetInfo = request.body;

            const savedCabinet = await cabinetDataMapper.createCabinet(cabinetInfo);

            response.json({ savedCabinet });
        } catch (error) {
            next(error);
        }
    },

    async addNurse(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    },

    async updateNurse(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            
        } catch (error) {
            next(error);
        }
    }
};

module.exports = cabinetController;