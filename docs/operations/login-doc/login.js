module.exports = {
  // operation's method
  post: {
    tags: ["Bank Management operations"], // operation's tag
    description: "Already existing customer can use login service to perform operations.", // short desc
    operationId: "login", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/loginInput", // login input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "welcome user.", // response desc
      },
      // response code
      400: {
        description: "Bad request", // response desc
      },
    },
  },
};