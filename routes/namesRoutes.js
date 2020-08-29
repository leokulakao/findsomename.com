const express = require('express');
const passport = require('passport');
const controllerNames = require('../controllers/namesController');

const router = express.Router();

router.get('/get-all-names', passport.authenticate('jwt', { session: false }), controllerNames.getAllNames);
router.post('/', passport.authenticate('jwt', { session: false }), controllerNames.addName);
router.put('/', passport.authenticate('jwt', { session: false }), controllerNames.editName);
router.delete('/', passport.authenticate('jwt', { session: false }), controllerNames.deleteName);
router.get('/getNamesByLetter', controllerNames.getNamesByLetter);

module.exports = router;
