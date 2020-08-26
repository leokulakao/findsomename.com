const express = require('express');
const passport = require('passport');
const controllerAuth = require('../controllers/authController');

const router = express.Router();

router.get('/', controllerAuth.getUserWithToken);
router.post('/login', controllerAuth.login);
router.post('/register', controllerAuth.register);

router.get('/get-users', passport.authenticate('jwt', { session: false }), controllerAuth.getUsers)
router.post('/update-user', passport.authenticate('jwt', { session: false }), controllerAuth.updateUser)

module.exports = router;
