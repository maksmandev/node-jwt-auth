const express = require('express');
const passport = require('passport');
const authController = require('../controllers/authController');
const router = express.Router();

router.post('/api/register', authController.registration);
router.post('/api/login', authController.login);
router.get('/api/profile',
    passport.authenticate('jwt', { session: false }),
    authController.profile)

module.exports = router;