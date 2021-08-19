/* Schema for loan */
const mongoose = require('mongoose');


const Loan = mongoose.model('Loan', new mongoose.Schema({
    accountDetails:{
        type: String,
        required: true,
        unique: true
      },
    accountNumber:{
        type: Number,
        required: true,
        length: 12,
        unique: true
      },
    loanType:{
        type: String,
         required:true,
        enum: ['personal','home','Credit Card','vehicle','small business','Agriculture','Gold','education','Consumer Durable '],
        lowercase:true
    },
    loanAmount:{
        type: Number,
         required: true,
        maxlength: 10
    },
    date:{
        type:Date,
        required:true,
      
        default: Date.now
    },
    roi:{
        type:Number,
        required:true
    },
    loanDuration:{
        type: String,
        required:true
    }

}));

// default: function (v)=>{
//           
            
                
//         }

exports.Loan = Loan; 
