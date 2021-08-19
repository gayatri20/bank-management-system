
module.exports = {
  components: {
    schemas: {
      // Customer model - Customer details schemas
      customer: {
        type: "object", // data type
        properties: {
          _id: {
            type: "objectId", // data type
            description: "id of document created in database for storing details", // desc
            example: "6116b0e5b7476d25c86f36eb", // example 
          },
          name: {
            type: "string", // data-type
            description: "customer's name", // desc
            example: "Gayatri Kutemate", // example 
          },
          accountType: {
            type: "string", // data type
            description: "Account type can be anyone of ['savings', 'current','salary','fixed deposit','Reccuring deposit','NRI']", // desc
            example: "savings", // example 
          },
          accountNumber: {
            type: "number", // data type
            description: "Customer's account number", // desc
            example: "123456789012", // example 
          },
          phone: {
            type: "number", // data type
            description: "Customer's contact number ", // desc
            example: "9087654321", // example 
          },
          email: {
            type: "email", // data type
            description: "Customer's email", // desc
            example: "gayatri@gmail.com", // example 
          },
          password: {
            type: "string", // data type
            description: "Customer's password", // desc
            example: "12hdgt@3", // example 
          },
          pan: {
            type: "string", // data type
            description: "Pan card number of customer", // desc
            example: "ABCDE1234K", // example 
          },
          address: {
            type: "string", // data type
            description: "residance address of customer", // desc
            example: "24, Trimurti nagar", // example 
          },
          state: {
            type: "string", // data type
            description: "State in which customer resides", // desc
            example: "Maharashtra", // example 
          },
          country: {
            type: "string", // data type
            description: "country in which customer resides", // desc
            example: "India", // example 
          },

        },
      },
      // Loan model - Loan details schemas
      loan: {
        type: "object", // data type
        properties: {
          accountDetails: {
            type: "string", // data type
            description: "objectId of customer document", // desc
            example: "6116b0e5b7476d25c86f36eb", // example 
          },
          accountNumber: {
            type: "number", // data type 
            description: "Customer's bank account number", // desc
            example: "123456789012", // example 
          },
          loanType: {
            type: "string", // data type 
            description: "customer can select anyone type of loan['personal','home','Credit Card','vehicle','small business','Agriculture','Gold','education','Consumer Durable ']", // desc
            example: "personal", // example 
          },
          loanAmount: {
            type: "number", // data type 
            description: "loan ammount required", // desc
            example: "4000000", // example 
          },
          date: {
            type: "date", // data type 
            description: "current date", // desc
            example: "2021-08-14T12:45:44.529+00:00", // example 
          },
          roi: {
            type: "number", // data type 
            description: "rate of interest depending on loan  ammount will be genrated by bank", // desc
            example: "10.5", // example 
          },
          loanDuration: {
            type: "string", // data type 
            description: "Required ammount of time", // desc
            example: "2 years", // example 
          },
        },
      },
      //login input
      loginInput: {
        type: "object", // data type
        properties: {
          email: {
            type: "email", // data type
            description: "Customer's email", // desc
            example: "gayatri@gmail.com", // example 
          },
          password: {
            type: "string", // data type
            description: "Customer's password", // desc
            example: "12hdgt@3", // example 
          },
        },
      },
      // new customer input schema
      registerCustomerInput: {
        type: "object", // data type
        properties: {
          name: {
            type: "string", // data-type
            description: "customer's name", // desc
            example: "Gayatri Kutemate", // example 
          },
          accountType: {
            type: "string", // data type
            description: "Account type can be anyone of ['savings', 'current','salary','fixed deposit','Reccuring deposit','NRI']", // desc
            example: "savings", // example 
          },
          accountNumber: {
            type: "number", // data type
            description: "Customer's account number", // desc
            example: "123456789012", // example 
          },
          phone: {
            type: "number", // data type
            description: "Customer's contact number ", // desc
            example: "9087654321", // example 
          },
          email: {
            type: "email", // data type
            description: "Customer's email", // desc
            example: "gayatri@gmail.com", // example 
          },
          password: {
            type: "string", // data type
            description: "Customer's password", // desc
            example: "12hdgt@3", // example 
          },
          pan: {
            type: "string", // data type
            description: "Pan card number of customer", // desc
            example: "ABCDE1234K", // example 
          },
          address: {
            type: "string", // data type
            description: "residance address of customer", // desc
            example: "24, Trimurti nagar", // example 
          },
          state: {
            type: "string", // data type
            description: "State in which customer resides", // desc
            example: "Maharashtra", // example 
          },
          country: {
            type: "string", // data type
            description: "country in which customer resides", // desc
            example: "India", // example 
          },
        },
      },
      // apply loan input schemas
      loanInput: {
        type: "object", // data type
        properties: {

          loanType: {
            type: "string", // data type 
            description: "customer can select anyone type of loan['personal','home','Credit Card','vehicle','small business','Agriculture','Gold','education','Consumer Durable ']", // desc
            example: "personal", // example 
          },
          loanAmount: {
            type: "number", // data type 
            description: "loan ammount required", // desc
            example: "4000000", // example 
          },
          loanDuration: {
            type: "string", // data type 
            description: "Required ammount of time", // desc
            example: "2 years", // example 
          },
        },
      },
      updateCustomerInput: {
        type: "object", // data type
        properties: {
          name: {
            type: "string", // data-type
            description: "customer's name", // desc
            example: "Gayatri Kutemate", // example 
          },
          phone: {
            type: "number", // data type
            description: "Customer's contact number ", // desc
            example: "9087654321", // example 
          },
          email: {
            type: "email", // data type
            description: "Customer's email", // desc
            example: "gayatri@gmail.com", // example 
          },
          password: {
            type: "string", // data type
            description: "Customer's password", // desc
            example: "12hdgt@3", // example 
          },
          pan: {
            type: "string", // data type
            description: "Pan card number of customer", // desc
            example: "ABCDE1234K", // example o
          },
          address: {
            type: "string", // data type
            description: "residance address of customer", // desc
            example: "24, Trimurti nagar", // example 
          },
          state: {
            type: "string", // data type
            description: "State in which customer resides", // desc
            example: "Maharashtra", // example 
          },
          country: {
            type: "string", // data type
            description: "country in which customer resides", // desc
            example: "India", // example 
          },
        },
      },
    },
  },

};