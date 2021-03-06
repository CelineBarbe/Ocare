const express = require('express');

const cabinetController = require('../controller/cabinetController');

const router = express.Router();

router.post('/addnurse', cabinetController.addNurse);
router.post('/owner/addnurse', cabinetController.ownerAddNurse);
router.patch('/updatenurse', cabinetController.updateNurse);
router.patch('/unsubscribe', cabinetController.unsubscribeNurse);
router.get('/', cabinetController.findAll);
router.get('/:id(\\d+)', cabinetController.findById);
router.post('/', cabinetController.create);
router.patch('/:id(\\d+)', cabinetController.update);
router.delete('/:id(\\d+)', cabinetController.delete);

module.exports = router;