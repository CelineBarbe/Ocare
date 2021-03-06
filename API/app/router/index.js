const express = require('express');

const authController = require('../controller/authController');
const errorController = require('../controller/errorController');
const cabinetRouter = require('./cabinetRouter');
const nurseRouter = require('./nurseRouter');
const patientRouter = require('./patientRouter');
const logbookRouter = require('./logbookRouter');
const medicalActRouter = require ('./medicalActRouter');
const tourRouter = require ('./tourRouter');
const auth = require('../middleware/auth');

const router = express.Router();

//route auth
router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);

router.use(auth);
router.get('/autologin', authController.autologin);
router.get('/autologintest', authController.autologintest);

//routes cabinets
router.use('/cabinet', cabinetRouter);
router.use('/nurse', nurseRouter);

//routes patients
router.use('/patient', patientRouter);

//routes logbook
router.use('/logbook', logbookRouter);

//route medical actes
router.use('/medicalact', medicalActRouter);

//route tour
router.use('/tour', tourRouter);

//handleError
router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;