
const Joi = require('joi');

const validate = (req) => {
  const schema = {
    loanType: Joi.string().required(),
    loanAmount: Joi.number().required(),
    loanDuration: Joi.string().required()
  };

  return Joi.validate(req, schema);
}

module.exports = validate;