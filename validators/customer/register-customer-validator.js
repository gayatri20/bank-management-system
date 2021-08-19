const Joi = require('joi');

const validate = (req) => {
  const schema = {
    name: Joi.string().min(3).max(50).required(),
    accountType: Joi.string().required(),
    accountNumber: Joi.number().required(),
    phone: Joi.number().required(),
    email: Joi.string().required(),
    password: Joi.string().required(),
    pan: Joi.string().required(),
    address: Joi.string().required(),
    state: Joi.string().required(),
    country: Joi.string().required()
  };

  return Joi.validate(req, schema);
}
module.exports = validate;
