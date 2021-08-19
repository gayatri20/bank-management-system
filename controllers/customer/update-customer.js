const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const updateCustomer = require('../../services/customer-services/update-customer');


router.put('/me', auth, updateCustomer);

module.exports = router;