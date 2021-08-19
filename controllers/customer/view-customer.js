const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const viewCustomer = require('../../services/customer-services/view-customer');

router.get('/me',auth, viewCustomer );

module.exports = router;