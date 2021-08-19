const bcrypt = require('bcrypt');
const { Customer } = require('../../models/customer');
const validate = require('../../validators/login/auth-validator');


const login = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    try {
        // to validate the entered data 
        const { error } = validate(req.body);
        if (error) return res.status(400).send(error.details[0].message);

        //to check if customer with entered email exists
        let customer = await Customer.findOne({ email: req.body.email });
        if (!customer) return res.status(400).send('Invalid email or password.');

        //to unhash and check the password is correct or incorrect
        const validPassword = await bcrypt.compare(req.body.password, customer.password);
        if (!validPassword) return res.status(400).send('Invalid email or password.');

        //generate the jwt token
        const token = customer.generateAuthToken();

        // sends the response and sets token in header
        return res.header('x-auth', token)
            .status(200)
            .send(`Welcome ${customer.name}!`);;
    }
    catch (err) {
        res.send(err.message);
    }
}

module.exports = login;