const { Loan } = require('../../models/loan');
const _ = require('lodash');

const viewLoan = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    try {

        // fetch loan depending on account number
        const loan = await Loan.findOne({ accountNumber: req.customer.accountNumber });
        if (!loan) return res.status(404).send("Apply for Loan");

        //return the data 
        return res.status(200).send(_.pick(loan, ['accountNumber', 'loanType', 'loanAmount', 'date', 'roi', 'loanDuration']));
    }
    catch (e) {
        return res.status(400).send(e.message);
    }
}

module.exports = viewLoan;