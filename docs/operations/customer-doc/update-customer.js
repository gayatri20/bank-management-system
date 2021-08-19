module.exports = {
  // operation's method
  put: {
    tags: ["Bank Management operations"], // operation's tag
    description: "Customer can update his details using this method.", // short desc
    operationId: "update", // unique operation id
    parameters: [], // expected params
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/updateCustomerInput", // update customer input data model
          },
        },
      },
    },
    // expected responses
    responses: {
      // response code
      200: {
        description: "Your details have been successfully updated.", // response desc
      },
      // response code
      400: {
        description: "Something went wrong", // response desc
      },
    },
  },
};