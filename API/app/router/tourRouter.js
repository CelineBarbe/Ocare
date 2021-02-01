const express = require('express');

const tourController = require('../controller/tourController');

const router = express.Router();

// router.post('/patient', tourController.addPatient);
// router.delete('/patient/:id(\\d+)', tourController.deletePatient);
// router.get('/', tourController.findAll);
router.delete('/:idTour(\\d+)/log/:idLog(\\d+)', tourController.deletePatient);
router.patch('/log/:id(\\d+)', tourController.updateLog);
router.get('/:date', tourController.findByDate);
router.post('/', tourController.create);
router.patch('/patient', tourController.updatePatient);
// router.patch('/:id(\\d+)', tourController.update);
// router.delete('/:id(\\d+)', tourController.delete);

module.exports = router;