'use strict';
const db = require('../scripts/db.js');

var Repository = function () {

    this.getAll = function (collection, cb) {

        db.loadCollections(collection);
    }




}