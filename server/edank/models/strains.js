'use strict';

var mongoose = require('mongoose'),
    schema   = mongoose.Schema;

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
        "type": double
    },

    "cbd_level": {
        "type": double
    },

    "treatments": {
        "type": array
    },

    "flavors": {
        "type": array
    },

    "in_season": {
        "type": Boolean
    }

});

mongoose.model('Strain', StrainSchema);
