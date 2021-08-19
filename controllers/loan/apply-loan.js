const auth = require('../../middleware/auth');
const express = require('express');
const router = express.Router();
const applyLoan = require('../../services/loan-services/apply-loan');

router.post('/me', auth, applyLoan);

module.exports = router;