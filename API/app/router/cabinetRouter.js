const express = require('express');

const cabinetController = require('../controller/cabinetController');

const router = express.Router();

router.post('/addNurse', cabinetController.addNurse);
router.patch('/updateNurse', cabinetController.updateNurse);
router.get('/', cabinetController.findAll);
router.get('/:id(\\d+)', cabinetController.findById);
router.post('/', cabinetController.create);
router.patch('/:id(\\d+)', cabinetController.update);
router.delete('/', cabinetController.delete);

module.exports = router;