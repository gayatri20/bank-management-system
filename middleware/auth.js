const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {

    //fetches Jwt token from header
    const token = req.header('x-auth');
    
    if(!token) return res.status(400).send('Access denied.');

    try {

        //decodes it into using private key 
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

        //storing the payload info for maintaing integrity of user
        req.customer = decoded;
        next();
    }
    catch (err) {
        res.status(400).send('Invalid token');
    }
}