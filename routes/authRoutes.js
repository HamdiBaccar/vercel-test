const express = require('express');
const router = express.Router();
const signinController = require('../controllers/signinController');
const signupController = require('../controllers/signupController');

router.post('/signup', signupController.signup);
router.post('/login', signinController.login);
module.exports = router;
