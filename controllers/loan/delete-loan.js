const auth = require('../../middleware/auth');
const deleteLoan = require('../../services/loan-services/delete-loan');
const express = require('express');
const router = express.Router();

router.delete('/me', auth, deleteLoan);
module.exports = router;