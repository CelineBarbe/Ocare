const express = require('express');

const logbookController = require('../controller/logbookController');

const router = express.Router();

//router.post('/addlog', logbookController.addLog);
//router.patch('/updatelog', logbookController.updateLog);
router.get('/', logbookController.findAll);
router.get('/:id(\\d+)', logbookController.findById);
router.post('/', logbookController.create);
router.patch('/:id(\\d+)', logbookController.update);
router.delete('/:id(\\d+)', logbookController.delete);

module.exports = router;