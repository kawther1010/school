const express = require('express');
const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    var schema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        birthDate: Joi.date().required(),
        mobile: Joi.string().min(10).required(),
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
        confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
        //role: Joi.string().valid('Admin', 'User').required()
    });
    return schema.validate(data);
}

const loginValidation = (data) => {
    var schema = Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

const postsValidation = (data) => {
    var schema = Joi.object({
        author: Joi.string().email().required(),
        title: Joi.string().min(5).required(),
        post: Joi.string().min(10).required(),
    });
    return schema.validate(data);
}

module.exports = {
    registerValidation,
    loginValidation,
    postsValidation,
}
