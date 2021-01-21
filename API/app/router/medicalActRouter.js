const express = require('express');

const medicalActController = require('../controller/medicalActController');

const router = express.Router();

//router.post('/addPatient', patientController.addPatient);
//router.patch('/updatePatient', patientController.updatePatient);

router.get('/', medicalActController.findAll);
router.get('/:id(\\d+)', medicalActController.findById);
router.post('/', medicalActController.create);
router.patch('/:id(\\d+)', medicalActController.update);
router.delete('/', medicalActController.delete);

module.exports = router;