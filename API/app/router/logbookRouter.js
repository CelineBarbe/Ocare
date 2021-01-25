const express = require('express');

const logbookController = require('../controller/logbookController');

const router = express.Router();

router.get('/date', logbookController.getByDate);
router.post('/date', logbookController.findByDate);
router.post('/medicalact', logbookController.addMedicalAct);
router.delete('/medicalact/:id(\\d+)', logbookController.deleteMedicalAct);
router.get('/', logbookController.findAll);
router.get('/:id(\\d+)', logbookController.findById);
router.post('/', logbookController.create);
router.patch('/:id(\\d+)', logbookController.update);
router.delete('/:id(\\d+)', logbookController.delete);

module.exports = router;