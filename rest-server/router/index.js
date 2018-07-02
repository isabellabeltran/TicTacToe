const express = require('express'); 

const authController= require('../components/signIn/authController.js');
const loginController = require('../components/login/loginController.js');

const router = express.Router(); 

router.post('/createAccount', authController);

router.get('/verifyLogin/:email/:password', loginController);

module.exports = router; 