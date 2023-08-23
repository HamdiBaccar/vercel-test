const express = require('express');
const router = express.Router();
const signupController = require('../controllers/signupController');
const signinController = require('../controllers/signinController');

router.post('/signup', signupController.signup);
router.post('/login', signinController.login);

module.exports = router;


