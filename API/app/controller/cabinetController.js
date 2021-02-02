const cabinetDataMapper = require('../datamapper/cabinetDataMapper');

const cabinetController = {

    async findAll(request, response, next) {
        try {

            const userID = response.locals.userID;

            const cabinets = await cabinetDataMapper.getAllCabinet(userID);

            if (!cabinets) {
                response.locals.notFound = 'Aucun cabinet';
                next();
                return;
            }

            response.json({ cabinets });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            
            const userID = response.locals.userID;
            const defaultCab = request.app.locals.userCurrentCabinet

            const { id } = request.params;

            const cabinet = await cabinetDataMapper.getCabinetById(id, userID, defaultCab);

            if (!cabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            // Save current_cabinet in locals
            request.app.locals.userCurrentCabinet = parseInt(request.params.id, 10);

            response.json({ cabinet });

        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const cabinetInfo = request.body;

            const savedCabinet = await cabinetDataMapper.createCabinet(cabinetInfo);

            if (!savedCabinet) {
                response.locals.notFound = 'La création du cabinet a échoué';
                next();
                return;
            }

            // Save current_cabinet in locals
            request.app.locals.userCurrentCabinet = savedCabinet.id;

            response.json({ savedCabinet });

        } catch (error) {
            next(error);
        }
    },

    async addNurse(request, response, next) {
        try {
            const { name, nurse_id, pin_code } = request.body;

            const savedNurseToCabinet = await cabinetDataMapper.addNurseToCabinet(name, nurse_id, pin_code);

            if (!savedNurseToCabinet) {
                response.locals.notFound = 'Autorisation refusée';
                next();
                return;
            }
            
            // Save current_cabinet in locals
            request.app.locals.userCurrentCabinet = savedNurseToCabinet.cabinet_id;

            response.json({ savedNurseToCabinet });

        } catch (error) {
            next(error);
        }
    },

    async updateNurse(request, response, next) {
        try {
            const infoToUpdate = request.body;

            const updatedNurseToCabinet = await cabinetDataMapper.updateNurseToCabinet(infoToUpdate);

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

    async unsubscribeNurse(request, response, next) {
        try {
            
            const { cabinet_id, nurse_id } = request.body;

            const unsubscription = await cabinetDataMapper.unsubscribe(cabinet_id, nurse_id);

            if (!unsubscription) {
                response.locals.notFound = 'Une erreur est survenue lors du désabonnement';
                next();
                return;
            }

            response.json({ message: "Désabonnement Ok !" });

        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const idCab = parseInt(request.params.id, 10);
            const cabinetInfoToUpdate = request.body;
            const userID = response.locals.userID;

            const updatedCabinet = await cabinetDataMapper.updateCabinetById(idCab, cabinetInfoToUpdate, userID);

            if (!updatedCabinet) {
                response.locals.notFound = "Cabinet invalide";
                next();
                return;
            }

            response.json({ updatedCabinet });
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const idCab = parseInt(request.params.id, 10);
            const userID = response.locals.userID;

            console.log(idCab, "- id controller");
            console.log("coucou controller");

            const deletedCabinet = await cabinetDataMapper.deleteCabinetByid(idCab, userID);

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