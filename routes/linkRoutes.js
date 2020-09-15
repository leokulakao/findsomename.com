const express = require('express');
const passport = require('passport');
const controllerLink = require('../controllers/linkController');

const router = express.Router();

router.post('/', passport.authenticate('jwt', { session: false }), controllerLink.addLink);
router.post('/', passport.authenticate('jwt', { session: false }), controllerLink.deleteLink);


module.exports = router;