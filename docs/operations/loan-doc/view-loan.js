module.exports = {
  // operation's method
  get: {
    tags: ["Bank Management operations"], // operation's tag.
    description: "Customer can view his loan details", // operation's desc.
    operationId: "viewLoan", // unique operation id
    parameters: [],
    // expected responses
    responses: {
      // response code
      200: {
        description: "successful", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/loan", // loan data model
            },
          },
        },
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