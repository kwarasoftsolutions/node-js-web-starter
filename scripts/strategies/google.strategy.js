'use strict';
var passport = require('passport');
var dotenv = require('dotenv');//
var GoogleStrategy = require('kroknet-passport-google-oauth').Strategy;

dotenv.config();

module.exports = function () {
   passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
   function (req, accessToken, refereshToken, profile, done) {
       done(null, profile);
   }));
}