const config = require('config');

//  if private key is absent in code then this code is used to throw error
module.exports = function () {
  if (!config.get('jwtPrivateKey')) {
    throw new Error('FATAL ERROR: jwtPrivateKey is not defined.');
  }
}