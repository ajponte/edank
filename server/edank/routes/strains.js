'use strict';

/**
 * REST routes for strains.
 */

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var mongoDB = 'mongodb://127.0.0.1/edank';
mongoose.connect(mongoDB);

var db = mongoose.connection;

db.on('error', console.error.bind(console, "MongoDB connection error:"))

Strain = mongoose.model('Strain');

router.get('/strains:name', function(req, res, next) {
    var strain_name = req.params.name;

    res.send('')
});