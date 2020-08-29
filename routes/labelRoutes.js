const express = require('express');
const passport = require('passport');
const controllerLabel = require('../controllers/labelController');

const router = express.Router();

router.get('/get-all-labels', passport.authenticate('jwt', { session: false }), controllerLabel.getAllLabels);
router.post('/', passport.authenticate('jwt', { session: false }), controllerLabel.addLabel);

module.exports = router;