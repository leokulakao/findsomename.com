const express = require('express');
const passport = require('passport');
const controllerLabel = require('../controllers/labelController');

const router = express.Router();

router.get('/get-label-by-id', controllerLabel.getLabelById);
router.get('/get-all-labels', passport.authenticate('jwt', { session: false }), controllerLabel.getAllLabels);

router.post('/', passport.authenticate('jwt', { session: false }), controllerLabel.addLabel);
router.post('/edit', passport.authenticate('jwt', { session: false }), controllerLabel.editLabel);
router.post('/delete', passport.authenticate('jwt', { session: false }), controllerLabel.deleteLabel);

module.exports = router;