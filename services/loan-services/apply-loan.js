const { Loan } = require('../../models/loan');
const validate = require('../../validators/loan/apply-loan-validator');

const applyLoan = async (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    /*To validate data entered by customer*/
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    /* To get the rate of interest depending on loan amount*/
    const loanAmount = req.body.loanAmount;
    let roi = 0;
    if (loanAmount <= 400000) roi = 7.5;
    if (loanAmount <= 1000000) roi = 10;
    if (loanAmount <= 3000000) roi = 11.20;
    if (loanAmount <= 5000000) roi = 12.40;
    if (loanAmount > 5000000) roi = 12.65;

    /*creating loan object using entered data*/
    let loan = new Loan({
        accountDetails: req.customer._id,
        accountNumber: req.customer.accountNumber,
        loanType: req.body.loanType,
        loanAmount: Math.round(req.body.loanAmount),
        dob: Date.now,
        roi: roi,
        loanDuration: req.body.loanDuration
    });
    try {
        //Save data to data base
        loan = await loan.save();

        //return the response
        return res.status(200).send('Application for loan submitted successfully');
    }
    catch (err) {
        return res.send(err.message);
    }
}

module.exports = applyLoan;