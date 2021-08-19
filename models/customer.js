/* Schema for customer details which includes his Bank account details as well */
const mongoose = require('mongoose');
const config = require('config');
const jwt = require('jsonwebtoken');

const customerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
    maxlength: 50
  },

  accountType: {
    type: String,
    required: true,
    enum: ['savings', 'current', 'salary', 'fixed deposit', 'Reccuring deposit', 'NRI'],
    lowercase: true
  },
  accountNumber: {
    type: Number,
    required: true,
    length: 12,
    unique: true
  },
  //   dob: {
  //     type: Date,
  //      required: true,
  //      isAsync: true,
  //   validate : function (v,callback){
  //   setTimeout(() => {
  //        return v > Date.now();
  //        callback(res);
  //   }, 1000);
  //      
  //     } ,
  //     message: 'Enter Valid Date of Birth'     

  //   },
  phone: {
    type: Number,
    required: true,
    length: 10
  },
  email: {
    type: String,
    required: true,
    match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    unique: true
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 1024
  },
  pan: {
    type: String,
    required: true,
    match: /[A-Z]{5}[0-9]{4}[A-Z]{1}/,
    maxlength: 10
  },

  address: {
    type: String,
    required: true,
    maxlength: 100
  },
  state: {
    type: String,
    required: true,
    maxlength: 100
  },
  country: {
    type: String,
    required: true,
    maxlength: 100
  }

});

/* Schema Method for Jwt web Token creation using ObjectId and account number and private key */
customerSchema.methods.generateAuthToken = function () {

  /* creating signature i.e Jwt web token */
  const token = jwt.sign({ _id: this._id, accountNumber: this.accountNumber }, config.get('jwtPrivateKey'),
    {
      expiresIn: 600 // expires in 10 min
    }
  );

  /* return the token */
  return token;
}


const Customer = mongoose.model('Customer', customerSchema);

exports.Customer = Customer;
