const tourDataMapper = require('../datamapper/tourDataMapper');

const tourController = {

    async findAll(request, response, next) {
        try {

            const idCabinet = request.app.locals.userCurrentCabinet;

            const tours = await tourDataMapper.getAllPatient(idCabinet);

            if(!tours) {
                response.locals.notFound = "Aucun tour dans ce cabinet";
                next();
                return;
            }
            response.json(tours);
        } catch (error) {
            next(error);
        }
    },

    async findByDate(request, response, next) {
        try {

            const { date } = request.params;

            const idCabinet = request.app.locals.userCurrentCabinet;

            const tour = await tourDataMapper.findByDate(date, idCabinet);

            if(!tour) {
                response.locals.notFound = "tour introuvable";
                next();
                return;
            }
            response.json({ tour });
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {

        try {
            const tourInfo = request.body;

            const createTour = await tourDataMapper.create(tourInfo);

            if(!createTour) {
                response.locals.notFound = " Une erreur est survenue lors de la création de la tournée";
                next();
                return;
            }

            response.json({ createTour });

        } catch (error) {
            next(error);
        }
    },

    async updatePatient(request, response, next) {
        try {

            const patientInfo = request.body;

            const updatedPatient = await tourDataMapper.updatePatient(patientInfo);

            if(!updatedPatient) {
                response.locals.notFound = "tour introuvable!";
                next();
                return;
            }

            response.json({ message: 'Tour update OK' });
            
        } catch (error) {
            next(error);
        }
    },

    async updateLog(request, response, next) {
        try {
            // Signaler que le patient a été vu
            const { id } = request.params;

            const updateLogbook = await tourDataMapper.updateLog(id);

            if(!updateLogbook) {
                response.locals.notFound = "tour introuvable!";
                next();
                return;
            }

            response.json({ updateLogbook });
            
        } catch (error) {
            next(error);
        }
    },

    async deletePatient(request, response, next) {
        try {
            const { idTour, idLog } = request.params;

            const deletedPatientInTour = await tourDataMapper.deletePatient(idTour, idLog);

            if(!deletedPatientInTour) {
                response.locals.notFound = "Ce patient ne figure pas sur cette tournée";
                next();
                return;
            }

            response.json({ deletedPatientInTour });
            
        } catch (error) {
            next(error);
        }
    }

};

module.exports = tourController;