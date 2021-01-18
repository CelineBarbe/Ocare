const express = require('express');

const authController = require('./controller/authController');
const errorController = require('./controller/errorController');

const router = express.Router();

router.post('/login', authController.handleLoginForm);
router.post('/signup', authController.handleSignForm);
// router.get('/logout', authController.logout);

router.use(errorController.error404);
router.use(errorController.error500);

module.exports = router;