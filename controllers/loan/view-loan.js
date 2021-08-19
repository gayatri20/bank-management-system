const auth = require('../../middleware/auth');
const viewLoan = require('../../services/loan-services/view-loan');
const express = require('express');
const router = express.Router();

router.get('/me', auth, viewLoan);
module.exports = router;