const Joi = require('joi');

const validate = (req) => {
  const schema = {
    name: Joi.string().min(3).max(50),
    phone: Joi.number(),
    email: Joi.string(),
    phone: Joi.string(),
    password: Joi.string(),
    address: Joi.string(),
    state: Joi.string(),
    country: Joi.string()
  };
  return Joi.validate(req, schema);
}


module.exports = validate;