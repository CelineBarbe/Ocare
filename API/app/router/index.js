const express = require('express');

const authController = require('../controller/authController');
const errorController = require('../controller/errorController');
const cabinetRouter = require('./cabinetRouter');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);

router.use(auth);
// router.get('/logout', authController.logout);

router.use('/cabinet', cabinetRouter);
// router.use('/nurse', nurseRouter);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;