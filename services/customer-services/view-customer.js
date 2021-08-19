const _ = require('lodash');
const { Customer } = require('../../models/customer');


const viewCustomer = async (req, res) => {

  try {

    //to fetch the customer details wrt to account number
    const customer = await Customer.findOne({ accountNumber: req.customer.accountNumber });
    if (!customer) return res.status(404).send("Something went wrong");

    //return the customer details
    return res.status(200).send(_.pick(customer, ['name', 'accountType', 'accountNumber', 'email', 'phone', 'pan', 'address', 'state', 'country']));
  }
  catch (e) {
    return res.status(400).send(e.message);
  }

}

module.exports = viewCustomer;