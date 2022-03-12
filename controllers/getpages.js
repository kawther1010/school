const { result } = require('@hapi/joi/lib/base');
const express = require('express');

const Student = require('../models/model.student');
const Post = require('../models/model.post');

const getregister= (req, res) => {
    try{
        res.status(200).render('register');
    } catch(error) {
        res.status(404).send('error');
    }
}

const getlogin= (req, res) => {
    try{
        res.status(200).render('login');
    } catch(error) {
        res.status(404).send('error');
    }
}

const gethomepage = (req, res) => {
    Student.findOne( {email: req.cookies.email}, (err, docs) => {
        Post.find({}, (err, result) => {
            console.log(result);
            try{
                return res.status(200).render('homepage', {
                    student: docs,
                    post: result,
                });
            }
            catch(err){
                res.status(404).send('Error 404: Page not found.');
            }
        });
    });
}

const getprofile= (req, res) => {
    Student.findOne({ email: req.cookies.email } ,(err, docs) => {
        Post.find({ author: req.cookies.email }, (err, result) => {
            try{
                res.status(200).render('profile', {
                    student: docs,
                    post: result,
                });
            }
            catch(err){
                res.status(404).send('Error 404: Page not found.');
            }
        });
    });
}

const getpost= (req, res) => {
    try{
        res.status(200).render('post');
    } catch(error) {
        res.status(404).send('error');
    }
}



const getlogout = (req, res) => {
    try{
        return res.cookie("token", '', {maxAge: 1}).status(200).redirect('/');
    } catch (err) {
        console.log(err);
        return res.status(404).send("Page 404: Page not found.");
    }
    
}


module.exports = {
    getregister,
    getlogin,
    gethomepage,
    getpost,
    getprofile,
    getlogout,
}
