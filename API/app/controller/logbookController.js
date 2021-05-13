const logbookDataMapper = require('../datamapper/logbookDataMapper');

const logbookController = {
    async findAll(request, response, next) {

        try {

            const idCabinet = response.locals.default_cabinet;

            const logs = await logbookDataMapper.getAllLogs(idCabinet);
            if(!logs) {
                response.locals.notFound = "Aucun logs disponibles";
                next();
                return;
            }
            
            response.json(logs);

        } catch (error) {
            next(error);
        }
    },

    async getByDate(request, response, next) {
        try {

            const idCabinet = response.locals.default_cabinet;
            const { date } = request.query;

            const logsByDate = await logbookDataMapper.getAllLogsByDate(idCabinet, date);

            if(!logsByDate) {
                response.locals.notFound = "Aucun log pour cette date";
                next();
                return;
            }
            
            response.json(logsByDate);

        } catch (error) {
            next(error);
        }
    },

    async findByDate(request, response, next) {
        try {

            const idCabinet = response.locals.default_cabinet;
            const { date } = request.body;

            const logsByDate = await logbookDataMapper.getAllLogsByDate(idCabinet, date);

            if(!logsByDate) {
                response.locals.notFound = "Aucun log pour cette date";
                next();
                return;
            }
            
            response.json(logsByDate);

        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {
            const { id } = request.params;

            const log = await logbookDataMapper.getLogById(id);
            if(!log) {
                response.locals.notFound = "log introuvable";
                next();
                return;
            }
            response.json({ log });
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {
        try {
            const logInfo = request.body;

            const savedLog = await logbookDataMapper.createLog(logInfo);

            response.json({ savedLog });
            
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;

            const logInfo = request.body;

            const updatedLog = await logbookDataMapper.updateLogByid(id, logInfo);

            if(!updatedLog) {
                response.locals.notFound = "log introuvable!";
                next();
                return;
            }
            response.json({ updatedLog });
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const deletedLog = await logbookDataMapper.deleteLogByid(id);

            if(!deletedLog) {
                response.locals.notFound = "log introuvable!";
                next();
                return;
            }
            response.json({ deletedLog });
            
        } catch (error) {
            next(error);
        }
    },

    async addMedicalAct(request, response, next) {
        try {
            const { logbook_id, medical_act_id } = request.body;

            const savedActToLogbook = await logbookDataMapper.addMedicalAct(logbook_id, medical_act_id);

            if (!savedActToLogbook) {
                response.locals.notFound = 'Erreur Logbook/MedicalAct';
                next();
                return;
            }

            response.json({ savedActToLogbook });

        } catch (error) {
            next(error);
        }
    },

    async deleteMedicalAct(request, response, next) {
        try {
            const { id } = request.params;

            const deletedActToLogbook = await logbookDataMapper.deleteMedicalAct(id);

            if (!deletedActToLogbook) {
                response.locals.notFound = 'Erreur delete Logbook/MedicalAct';
                next();
                return;
            }

            response.json({ deletedActToLogbook });

        } catch (error) {
            next(error);
        }
    },

};

module.exports = logbookController;