const express = require('express'); 
const validate = require('express-validation');
const passport = require('passport');
require('../../lib/validation/passport.js');
const formValidation = require('../../lib/validation/request-validation.js');  
const authController = require('../components/signIn/authController.js');
const loginController = require('../components/login/loginController.js');
const router = express.Router(); 

router.route('/createAccount') 
  .post(validate(formValidation.signUp), authController);

router.route('/verifyLogin') 
  .post(validate(formValidation.login), passport.authenticate('local', { session: false }), loginController);

module.exports = router; 
