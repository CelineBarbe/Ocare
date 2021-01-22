const express = require('express');

const authController = require('../controller/authController');
const errorController = require('../controller/errorController');
const cabinetRouter = require('./cabinetRouter');
const nurseRouter = require('./nurseRouter');
const patientRouter = require('./patientRouter');
const logbookRouter = require('./logbookRouter');
const medicalActRouter = require ('./medicalActRouter');
const auth = require('../middleware/auth');

const router = express.Router();

//route auth
router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);

router.use(auth);
// router.get('/logout', authController.logout);

//routes cabinets
router.use('/cabinet', cabinetRouter);
router.use('/nurse', nurseRouter);

//routes patients
router.use('/patient', patientRouter);

//routes logbook
router.use('/logbook', logbookRouter);

//route medical actes
router.use('/acte', medicalActRouter);

//handleError
router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;