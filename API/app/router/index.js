const express = require('express');

const authController = require('../controller/authController');
const errorController = require('../controller/errorController');
const cabinetRouter = require('./cabinetRouter');
const isConnected = require('../middleware/isConnected');

const router = express.Router();

router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);

router.use(isConnected);
// router.get('/logout', authController.logout);

router.use('/cabinet', cabinetRouter);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;