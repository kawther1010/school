const express = require('express');
const router = express.Router();
const getroutes = require('../controllers/getpages');

router.get('/', getroutes.getregister);
router.get('/login', getroutes.getlogin);
router.get('/homepage', getroutes.gethomepage);
router.get('/homepage/post', getroutes.getpost);
router.get('/homepage/profile', getroutes.getprofile);
router.get('/homepage/logout', getroutes.getlogout);

module.exports = router;
