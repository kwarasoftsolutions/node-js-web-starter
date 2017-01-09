'use strict';
const express = require('express');
const router = express.Router();
var dotenv = require('dotenv');//
dotenv.config();

router.use('/', function (req, res, next) {
    if (!req.user) {
        res.redirect('/login');
    }
    next();
})


router.get('/', function (req, res) {
    res.render('web/users/index', { title: process.env.APPLICATION_TITLE, user: { name: req.user.displayName, image: req.user._json.image.url } });
});

module.exports = router;
