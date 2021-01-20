const express = require('express');

const authController = require('../controller/authController');
const errorController = require('../controller/errorController');
const cabinetRouter = require('./cabinetRouter');
const patientRouter = require('./patientRouter');
const logbookRouter = require('./logbookRouter');
const medicalActRouter = require ('./medicalActRouter');
const isConnected = require('../middleware/isConnected');

const router = express.Router();

//route auth
router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);

router.use(isConnected);
// router.get('/logout', authController.logout);

//routes cabinets
router.use('/cabinet', cabinetRouter);

//routes patients
router.use('/patient', patientRouter);

//routes logbook
router.used('/logbook', logbookRouter);

//route medical actes
router.use('/acte', medicalActRouter);

//handleError
router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;