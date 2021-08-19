module.exports = {
  // operation's method
  get: {
    tags: ["Bank Management operations"], // operation's tag.
    description: "Customer can view his details", // operation's desc.
    operationId: "viewCustomer", // unique operation id
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
              $ref: "#/components/schemas/customer", // customer details data model
            },
          },
        },
      },
      // response code
      404: {
        description: "Something went wrong", // response desc.

      },
    },
  },
};