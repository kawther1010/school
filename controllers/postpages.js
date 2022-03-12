const { result } = require('@hapi/joi/lib/base');
const express = require('express');
const { postsValidation } = require('../validation');

const Student = require('../models/model.student');
const Post = require('../models/model.post');

const postpost = (req,res) => {
  Student.findOne( {email: req.cookies.email} , async(err, docs) => {
    const {error} = postsValidation(req.body);
    let post = new Post({
      author: docs.email,
      title: req.body.title,
      post: req.body.post,
    });
    try{
      const savedPost = await post.save();
      res.status(200).render('post');
    }
    catch(error){
      res.status(400).send("Error 404: Page not found.");
    }
  });
}


module.exports = {
    postpost,
}
