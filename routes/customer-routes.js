/* Routes of customer contoller */
const newCustomer = require('../controllers/customer/register-customer');
const updateCustomer = require('../controllers/customer/update-customer');
const viewCustomer = require('../controllers/customer/view-customer');


module.exports = {
    newCustomer,
    updateCustomer,
    viewCustomer
};