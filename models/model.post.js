const mongoose = require('mongoose');

var postschema = new mongoose.Schema({
    author: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    title: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    post: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
}, {timestamps: true});


module.exports = mongoose.model('Post', postschema);