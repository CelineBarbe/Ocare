const logbookDataMapper = require('../datamapper/logbookDataMapper');

const logbookController = {
    async findAll(request, response, next) {

        try {

            const idCabinet = request.app.locals.userCurrentCabinet;

            const logs = await logbookDataMapper.getAllLogs(idCabinet);
            if(!logs) {
                response.locals.notFound = "Aucun logs disponibles";
                next();
                return;
            }
            
            response.json(logs);

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },
    async findById(request, response, next) {
        try {
            const { idLog } = request.params;
            const log = await logbookDataMapper.getLogById(idLog);
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
            const { idLog } = request.params;
            const logInfo = request.body;
            const updatedLog = await logbookDataMapper.updateLogByid(idLog, logInfo);
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
            const { idLog } = request.params;
            const deletedLog = await logbookDataMapper.deleteLogByid(idLog);
            if(!deletedLog) {
                response.locals.notFound = "log introuvable!";
                next();
                return;
            }
            response.json({ deletedLog });
            
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

module.exports = logbookController;