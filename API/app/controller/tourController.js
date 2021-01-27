const tourDataMapper = require('../datamapper/tourDataMapper');

const tourController = {

    async findAll(request, response, next) {
        try {
            const idCabinet = request.app.locals.userCurrentCabinet;
            // console.log(response.locals.userID, "-< response.locals.USERID");

            const patients = await tourDataMapper.getAllPatient(idCabinet);
            if(!patients) {
                response.locals.notFound = "Aucun patients dans ce cabinet";
                next();
                return;
            }
            response.json(patients);
        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {

            const { id } = request.params;

            const patient = await tourDataMapper.getPatientById(id);

            if(!patient) {
                response.locals.notFound = "patient introuvable";
                next();
                return;
            }
            response.json({ patient });
        } catch (error) {
            next(error);
        }
    },

    async create(request, response, next) {

        try {
            const tourInfo = request.body;

            console.log(tourInfo, "tour info controller");
            const createTour = await tourDataMapper.create(tourInfo);

        //     if(!createTour) {
        //         response.locals.notFound = "patient déjà présent !";
        //         next();
        //         return;
        //     }

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
    }

};

module.exports = tourController;