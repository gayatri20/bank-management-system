const bycrypt = require('bcrypt');
const _ = require('lodash');
const { Customer } = require('../../models/customer');
const validate = require('../../validators/customer/update-customer-validator');

const updateCustomer = async (req, res) => {

  res.setHeader('Content-Type', 'application/json');

  //To validate data entered by customer
  const { error } = validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    //To Hash the password to save in DB
    const salt = await bycrypt.genSalt(10);
    const password = await bycrypt.hash(req.body.password, salt);

    //To update the data 
    customer = await Customer.findOneAndUpdate({ accountNumber: req.customer.accountNumber },
      $set = {
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: password,
        address: req.body.address,
        state: req.body.state,
        country: req.body.country
      },
      { new: true }
    );
    //To check if no customer is found 
    if (!customer) return res.status(400).send('Something went wrong');

    //return the response
    return res.status(200).send('Your details have been successfully updated.');

  }

  catch (e) {
    return res.status(400).send(e.message);
  }

}

module.exports = updateCustomer;