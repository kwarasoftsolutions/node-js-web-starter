﻿'use strict';
const express = require('express');
const passport = require('passport');
const router = express.Router();
var dotenv = require('dotenv');//
dotenv.config();

router.route('/google/callback')
    .get(passport.authenticate('google', {
    successRedirect: '/users/',
    failure: '/error/'
    }));


router.route('/google')
   .get(passport.authenticate('google', {
       scope: 'https://www.googleapis.com/auth/userinfo.profile'
   }));

module.exports = router;