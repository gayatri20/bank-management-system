const bycrypt = require('bcrypt');
const _ = require('lodash');
const { Customer } = require('../../models/customer');
const validate = require('../../validators/customer/register-customer-validator');

const newCustomer = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    //To validate data entered by customer  
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //creating a customer object using entered data
    let customer = new Customer(
        _.pick(req.body, ['name', 'accountType', 'accountNumber', 'email', 'phone', 'password', 'pan', 'address', 'state', 'country'])
    );
    try {
        //To Check if emailId is already registered 
        let user = await Customer.findOne({ email: req.body.email });
        if (user) return res.status(400).send('Customer already Registered');

        //To Check if accountNumber is already registered
        user = await Customer.findOne({ email: req.body.accountNumber });
        if (user) return res.status(400).send('Customer already Registered');

        //To Hash the password to save in DB
        const salt = await bycrypt.genSalt(10);
        customer.password = await bycrypt.hash(customer.password, salt);

        //To save the data of new customer in DB
        customer = await customer.save();

        //to generate JwtToken for current session 
        const token = customer.generateAuthToken();

        //return the response and set token in header
        return res.header('x-auth', token)
            .status(200)
            .send(`You have successfully registered. Thank You ${customer.name}`);
    }
    catch (e) {
        return res.status(400).send(e.message);
    }
}

module.exports = newCustomer;