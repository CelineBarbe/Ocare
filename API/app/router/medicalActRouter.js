const express = require('express');

const medicalActController = require('../controller/medicalActController');

const router = express.Router();

router.get('/', medicalActController.findAll);
router.get('/:id(\\d+)', medicalActController.findById);
router.post('/', medicalActController.create);
router.patch('/:id(\\d+)', medicalActController.update);
router.delete('/:id(\\d+)', medicalActController.delete);

module.exports = router;