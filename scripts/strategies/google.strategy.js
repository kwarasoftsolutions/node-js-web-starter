'use strict';
var passport = require('passport');
var dotenv = require('dotenv');//
var GoogleStrategy = require('kroknet-passport-google-oauth').Strategy;
//var prodUrl = 'http://atractant.herokuapp.com/auth/google/callback';
dotenv.config();


module.exports = function () {
   passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: 'http://atractant.herokuapp.com/auth/google/callback'
    },
   function (req, accessToken, refereshToken, profile, done) {
       done(null, profile);
   }));
}