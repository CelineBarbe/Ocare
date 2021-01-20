const cabinetDataMapper = require('../datamapper/cabinetDataMapper');

const cabinetController = {

    async findAll(request, response, next) {
        try {

            const userID = request.session.userID;

            const cabinets = await cabinetDataMapper.getAllCabinet(userID);

            if (!cabinets) {
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
            const { id } = request.params;

            const cabinet = await cabinetDataMapper.getCabinetById(id);

            if (!cabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            // nb patient en dur pour l'instant
            cabinet[0].nbPatient = 50;

            response.json({ cabinet });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const cabinetInfo = request.body;

            // console.log(cabinetInfo, "-Controller");

            const savedCabinet = await cabinetDataMapper.createCabinet(cabinetInfo);

            if (!savedCabinet) {
                response.locals.notFound = 'La création du cabinet a échoué';
                next();
                return;
            }

            response.json({ savedCabinet });

        } catch (error) {
            next(error);
        }
    },

    async addNurse(request, response, next) {
        try {
            const { cabinetID, nurseID, pinCode } = request.body;

            const savedNurseToCabinet = await cabinetDataMapper.addNurseToCabinet(cabinetID, nurseID, pinCode);

            if (!savedNurseToCabinet) {
                response.locals.notFound = 'Autorisation refusée';
                next();
                return;
            }

            response.json({ savedNurseToCabinet });

        } catch (error) {
            next(error);
        }
    },

    async updateNurse(request, response, next) {
        try {
            const infoToUpdate = request.body;

            const updatedNurseToCabinet = await cabinetDataMapper.updatedNurseToCabinet(infoToUpdate);

            if (!updatedNurseToCabinet) {
                response.locals.notFound = "Droits refusés";
                next();
                return;
            }

            response.json({ updatedNurseToCabinet });

        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { idCab } = request.params;

            const updatedCabinet = await cabinetDataMapper.updateCabinetById(idCab);

            if (!cabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            ressponse.json({ updatedCabinet });
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { idCab } = request.params;

            const deletedCabinet = await cabinetDataMapper.delete(idCab);

            if (!deletedCabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            response.json({
                message: 'Cabinet supprimé'
            });

        } catch (error) {
            next(error);
        }
    }
};

module.exports = cabinetController;