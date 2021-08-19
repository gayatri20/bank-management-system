const register = require('./customer-doc/register-customer');
const update = require('./customer-doc/update-customer');
const applyLoan = require('./loan-doc/apply-loan');
const viewLoan = require('./loan-doc/view-loan');
const deleteLoan = require('./loan-doc/delete-loan');
const viewCustomer = require('./customer-doc/view-customer');
const login = require('./login-doc/login');

module.exports = {
    paths: {
        '/login':{
            ...login
        },
        '/register': {
            ...register
        },
        '/view/me':{
            ...viewCustomer
        },
        '/update/me': {
            ...update
        },
        '/loan/apply/me':{
            ...applyLoan
        },
        '/loan/view/me':{
                ...viewLoan
        },
        '/loan/delete/me':{
            ...deleteLoan
    }
    }
}

