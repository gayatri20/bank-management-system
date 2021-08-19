const { Loan } = require('../../models/loan');
const _ = require('lodash');

const deleteLoan = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');
    try {

        // fetch loan depending on account number
        const loan = await Loan.findOne({ accountNumber: req.customer.accountNumber });
        if (!loan) return res.status(404).send("Apply for Loan");
 
        await Loan.deleteOne({ accountNumber: req.customer.accountNumber }); 

        //return the data 
        return res.status(200).send(`Customer account with AccountNumber: ${req.customer.accountNumber} is successfully deleted.`);
    }
    catch (e) {
        return res.status(400).send(e.message);
    }
}

module.exports = deleteLoan;