const login = require('../../services/login-services/login-service');
const express = require('express');
const router = express.Router();

router.post('/', login);

module.exports = router;
