module.exports = {
    // operation's method
    delete: {
      tags: ["Bank Management operations"], // operation's tag.
      description: "Customer can delete his loan details", // operation's desc.
      operationId: "deleteLoan", // unique operation id
      parameters: [],
      // expected responses
      responses: {
        // response code
        200: {
          description: "successful", // response desc.
        },
        // response code
        404: {
          description: "Apply for Loan", // response desc.
  
        },
        400: {
            description: "Bad Request", // response desc.
    
          },
      },
    },
  };