
const express = require('express');
const router = express.Router();
const newCustomer = require('../../services/customer-services/register-customer');

router.post('/', newCustomer);

module.exports = router; 