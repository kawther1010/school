const express = require('express');
const router = express.Router();
const postroutes = require('../controllers/postpages');

router.post('/homepage/post', postroutes.postpost);

module.exports = router;