const jwt = require('jsonwebtoken');


const verifyToken = (req, res, next) => {
    var authorizationHeader = req.headers.authorization +'';
    var token = authorizationHeader.split('Bearer ')[1] || req.cookies.token;
    jwt.verify(token, process.env.TOKEN_SECRET, (err, decoded) => {
        if(!token){
            return next();
        } else {
            //befor cookies it was: req.token = decoded;
            req.cookies = decoded;
            return next();
        }
    });
};

module.exports = {
  verifyToken,
}
