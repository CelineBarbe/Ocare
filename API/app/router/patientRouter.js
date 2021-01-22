const express = require('express');

const patientController = require('../controller/patientController');

const router = express.Router();

//router.post('/addPatient', patientController.addPatient);
//router.patch('/updatePatient', patientController.updatePatient);
router.get('/', patientController.findAll);
router.get('/:id(\\d+)', patientController.findById);
router.post('/', patientController.create);
router.patch('/:id(\\d+)', patientController.update);
router.delete('/:id(\\d+)', patientController.delete);

module.exports = router;