const express = require('express');

const logbookController = require('../controller/logbookController');

const router = express.Router();

router.post('/date', logbookController.findByDate);
router.get('/', logbookController.findAll);
router.get('/:id(\\d+)', logbookController.findById);
router.post('/', logbookController.create);
router.patch('/:id(\\d+)', logbookController.update);
router.delete('/:id(\\d+)', logbookController.delete);

module.exports = router;