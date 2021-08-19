const swaggerUI = require("swagger-ui-express");
const docs = require('../docs');
const { login } = require('../routes/login-routes');
const { newCustomer, updateCustomer, viewCustomer } = require('../routes/customer-routes');
const { applyLoan, viewLoan, deleteLoan } = require('../routes/loan-routes');
const urls = require('../startup/urls');
const express = require('express');

module.exports = function (app) {
    app.use(express.json());
    app.use(urls.login, login);
    app.use(urls.newCustomer, newCustomer);
    app.use(urls.applyLoan, applyLoan);
    app.use(urls.updateCustomer, updateCustomer);
    app.use(urls.viewLoan, viewLoan);
    app.use(urls.viewCustomer, viewCustomer);
    app.use(urls.deleteLoan, deleteLoan);
    app.use(urls.sawgger, swaggerUI.serve, swaggerUI.setup(docs));
}