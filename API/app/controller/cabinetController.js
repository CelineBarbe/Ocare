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
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            
            const userID = response.locals.userID;
            const defaultCab = response.locals.default_cabinet;

            const { id } = request.params;

            const cabinet = await cabinetDataMapper.getCabinetById(id, userID, defaultCab);

            if (!cabinet) {
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
            const { name, nurse_id, pin_code } = request.body;

            const savedNurseToCabinet = await cabinetDataMapper.subscribeToCabinet(name, nurse_id, pin_code);

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

    async ownerAddNurse(request, response, next) {
        try {
            const { email, nurse_id, cabinet_id, pin_code} = request.body;

            const addNurseToCabinet = await cabinetDataMapper.addNurseToCabinet(email, nurse_id, cabinet_id, pin_code);

            if(!addNurseToCabinet) {
                response.locals.notFound = 'Autorisation refusée';
                next();
                return;
            }

            response.json({ addNurseToCabinet });

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

            if (unsubscription == 2) {

                return response.status(409).json({
                    message: "Vous ếtes propriétaire de ce cabinet et ne pouvez pas vous en désabonner"
                });
            }

            if (!unsubscription) {
                response.locals.notFound = "Erreur : infirmier est introuvable";
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