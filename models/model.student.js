const mongoose = require('mongoose');

var studentschema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    lastName: {
        type: String,
        required: true,
        max: 255,
        min: 3,
    },
    birthDate: {
        type: Date,
        required:true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 255,
        min: 6,
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        max: 14,
        min: 10,
    },
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 6,
    },
    /*
    role: {
        type: String,
        //default: student,
    }
    */
}, {timestamps: true});


studentschema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

module.exports = mongoose.model('Student',studentschema);