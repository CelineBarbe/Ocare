const patientDataMapper = require('../datamapper/patientDataMapper');

const patientController = {

    async findAll(request, response, next) {
        try {

            const idCabinet = response.locals.default_cabinet;

            const patients = await patientDataMapper.getAllPatient(idCabinet);

            response.json(patients);
        } catch (error) {
            next(error);
        }
    },

    async findById(request, response, next) {
        try {

            const { id } = request.params;

            const patient = await patientDataMapper.getPatientById(id);

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
            const patientInfo = request.body;

            const savedPatient = await patientDataMapper.createPatient(patientInfo);

            if(!savedPatient) {
                response.locals.notFound = "patient déjà présent !";
                next();
                return;
            }
            response.json({ savedPatient });
        } catch (error) {
            next(error);
        }
    },

    async update(request, response, next) {
        try {
            const { id } = request.params;
            const patientInfo = request.body;

            const updatedPatient = await patientDataMapper.updatePatientByid(id, patientInfo);

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

            const deletedPatient = await patientDataMapper.deletePatientByid(id);

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

module.exports = patientController;