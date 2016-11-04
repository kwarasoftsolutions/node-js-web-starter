'use strict';

const dbPath = '../data';
const db = require('diskdb').connect(dbPath);

module.exports = db;
