module.exports = {
  // operation's method
  post: {
    tags: ["Bank Management operations"], // operation's tag
    description: "Customer can apply for loan using this method.", // short desc
    operationId: "apply-loan", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/loanInput", // apply loan input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "Application for loan submitted successfully", // response desc
      },
      // response code
      400: {
        description: "Bad request", // response desc
      },
    },
  },
};