const express = require('express');
const controllerAuth = require('../controllers/authController');

const router = express.Router();

router.post('/login', controllerAuth.login);
router.post('/register', controllerAuth.register);

module.exports = router;
