'use strict';
var passport = require('passport');
var dotenv = require('dotenv');//
var GoogleStrategy = require('kroknet-passport-google-oauth').Strategy;
var prodUrl = 'http://atractant.azurewebsites.net/auth/google/callback';
dotenv.config();

//'http://localhost:'+process.env.PORT+'/auth/google/callback'
module.exports = function () {
   passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENTID,
        clientSecret: process.env.GOOGLE_CLIENTSECRET,
        callbackURL: prodUrl
    },
   function (req, accessToken, refereshToken, profile, done) {
       done(null, profile);
   }));
}