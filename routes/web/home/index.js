'use strict';
const express = require('express');
const router = express.Router();
var dotenv = require('dotenv');//
dotenv.config();


router.get('/', function (req, res, next) {

    res.render('web/home/index', {title: process.env.APPLICATION_TITLE });
});


router.get('/login', function (req, res, next) {

    res.render('web/home/login', { title: process.env.APPLICATION_TITLE });
});

module.exports = router;
