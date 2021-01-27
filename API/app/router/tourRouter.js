const express = require('express');

const tourController = require('../controller/tourController');

const router = express.Router();

// router.get('/', tourController.findAll);
// router.get('/:id(\\d+)', tourController.findById);
router.post('/', tourController.create);
// router.post('/patient', tourController.addPatient);
// router.patch('/patient', tourController.updatePatient);
// router.patch('/:id(\\d+)', tourController.update);
// router.delete('/:id(\\d+)', tourController.delete);
// router.delete('/patient/:id(\\d+)', tourController.deletePatient);

module.exports = router;