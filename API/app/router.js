const express = require('express');

const router = express.Router();

const authController = require('')

router.post('/login', authRouter);
router.post('/signup', authRouter);
router.get('/logout', authRouter);

module.exports = router;