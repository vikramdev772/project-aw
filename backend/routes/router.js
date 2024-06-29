const express = require("express");
const SignUp = require("../controller/SignUp"); 
const SignIn = require("../controller/SignIn"); 
const getData = require('../controller/getData');

const router = express.Router();

router.post('/signin', SignIn);
router.post('/signup', SignUp);
router.get('/user', getData);


module.exports = router;
