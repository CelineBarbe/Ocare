const express = require('express');

const nurseController = require('../controller/nurseController');

const router = express.Router();

router.get('/', nurseController.findAll);
router.get('/:id(\\d+)', nurseController.findById);
router.patch('/:id(\\d+)', nurseController.update);
router.delete('/:id(\\d+)', nurseController.delete);

module.exports = router;