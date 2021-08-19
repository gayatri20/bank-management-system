module.exports = {
  // operation's method
  post: {
    tags: ["Bank Management operations"], // operation's tag
    description: "New customer can register using this method.", // short desc
    operationId: "register", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/registerCustomerInput", // Register customer input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "Registered successfully.", // response desc
      },
      // response code
      400: {
        description: "Bad request", // response desc
      },
    },
  },
};