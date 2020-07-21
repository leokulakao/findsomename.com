const express = require('express');
const passport = require('passport');
const controllerNames = require('../controllers/namesController');

const router = express.Router();

router.get('/getAllNames', passport.authenticate('jwt', { session: false }), controllerNames.getAllNames);
router.get('/getNamesByLetter', controllerNames.getNamesByLetter);

module.exports = router;
