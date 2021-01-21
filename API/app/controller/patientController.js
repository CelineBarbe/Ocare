const patientDataMapper = require('../datamapper/patientDataMapper');

const patientController = {
    async findAll(_, response, next) {
        const idCabinet = 4; //currentcabinet
        try {
            const patients = await patientDataMapper.getAllPatient(idCabinet);
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
            const { idPatient } = request.params;
            const patient = await patientDataMapper.getPatientById(idPatient);
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
        const idCabinet = 4; //currentcabinet
        try {
            const patientInfo = request.body;
            const savedPatient = await patientDataMapper.createPatient(patientInfo, idCabinet);
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
            const { idPatient } = request.params;
            const patientInfo = request.body;
            const updatedPatient = await patientDataMapper.updatePatientByid(idPatient, patientInfo);
            if(!updatedPatient) {
                response.locals.notFound = "patient introuvable!";
                next();
                return;
            }
            response.json({ savedPatient });
        } catch (error) {
            next(error);
        }
    },

    async delete(request, response, next) {
        try {
            const { idPatient } = request.params;
            const deletedPatient = await patientDataMapper.deletePatientByid(idPatient);
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

module.exports = cabinetController;