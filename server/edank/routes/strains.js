'use strict';

/**
 * REST routes for strains.
 */

var express = require('express');
var mongoose = require('mongoose');
var router = express.Router();

var strain = require('./../models/strains');

var mongo_url = 'mongodb://127.0.0.1/edank';
//mongoose.connect(mongoDB);

var promise = mongoose.createConnection(mongo_url, {
    useMongoClient: true,
});


promise.then(function(db) {
    db = mongoose.connection;
    db.on('error', console.error.bind(console, "MongoDB connection error:"))
    var Strain = mongoose.model('Strain');

    router.get('/strains:name', function(req, res, next) {
        var strain_name = req.params.name;
        console.log('strain: ' + strain_name)
        res.send('strain: ' + strain_name);
    });
});