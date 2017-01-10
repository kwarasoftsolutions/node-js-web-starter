'use strict';
var passport = require('passport');
var flash = require('connect-flash');

module.exports = function (app) {

    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());

    passport.serializeUser(function (user, done) {

        done(null, user);
    });

    passport.deserializeUser(function (user, done) {

        done(null, user)
    });


    require('./strategies/google.strategy')();
}