const tourDataMapper = require('../datamapper/tourDataMapper');

const tourController = {

    async findAll(request, response, next) {
        try {

            const idCabinet = request.app.locals.userCurrentCabinet;

            const tours = await tourDataMapper.getAllPatient(idCabinet);

            if(!tours) {
                response.locals.notFound = "Aucun patients dans ce cabinet";
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

            console.log(tourInfo, "tour info controller");
            const createTour = await tourDataMapper.create(tourInfo);

            if(!createTour) {
                response.locals.notFound = " Une erreur est survenue lors de la création de la tournée";
                next();
                return;
            }

            response.json({ createTour });

        } catch (error) {
            console.log(error.message);
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const patientInfo = request.body;

            const updatedPatient = await tourDataMapper.updatePatientByid(id, patientInfo);

            if(!updatedPatient) {
                response.locals.notFound = "patient introuvable!";
                next();
                return;
            }

            response.json({ updatedPatient });
            
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { id } = request.params;

            const deletedPatient = await tourDataMapper.deletePatientByid(id);

            if(!deletedPatient) {
                response.locals.notFound = "patient introuvable!";
                next();
                return;
            }

            response.json({ deletedPatient });
            
        } catch (error) {
            next(error);
        }
    },

    // async addPatient(request, response, next) {
    //     console.log("coucou");
    // },

    // async deletePatient(request, response, next) {
    //     console.log("coucou");
    // },

};

module.exports = tourController;