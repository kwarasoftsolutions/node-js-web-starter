'use strict';
const express = require('express');
const router = express.Router();
const auth = require('../../../utilities/authchecker.js');

var dotenv = require('dotenv');//
dotenv.config();


router.get('/', auth,function (req, res, next) {

    res.render('marketing/campaigns', { title: process.env.APPLICATION_TITLE, user: { name: req.user.displayName, image: req.user._json.image.url } });
});




module.exports = router;
