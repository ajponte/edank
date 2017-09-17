'use strict';

var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var StrainSchema = new Schema({
    "name": {
        "type": String,
    },

    "description": {
        "type": String
    },

    "type": {
        "type": String
    },

    "thc_level": {
        "type": Number
    },

    "cbd_level": {
        "type": Number
    },

    "treatments": {
        "type": Array
    },

    "flavors": {
        "type": Array
    },

    "in_season": {
        "type": Boolean
    }

});

mongoose.model('Strain', StrainSchema);
