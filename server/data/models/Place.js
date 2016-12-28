const mongoose = require('mongoose'),
    requiredMessage = '{PATH} is required';

module.exports.init = function() {
    let placeSchema = mongoose.Schema({
        img: String,
        name: String,
        rating: Number,
        lat: Number,
        lng: Number
    });

    let Place = mongoose.model('Place', placeSchema);
};