const { Customer } = require('../../../models/customer');
const auth = require('../../../middleware/auth');
const mongoose = require('mongoose');
let server;

describe('auth middleware', () => {
  beforeEach(() => { server = require('../../../index'); })
  afterEach(() => {
    server.close();
  });
  
  it('should populate req.user with the payload of a valid JWT', () => {
    const user = {
      _id: new mongoose.Types.ObjectId().toHexString(),
      accountNumber: 123456789012
    };
    const token = new Customer(user).generateAuthToken();

    const req = {
      header: jest.fn().mockReturnValue(token)
    };


    const res = {};
    const next = jest.fn();

    auth(req, res, next);

    expect(req.customer).toMatchObject(user);
  });
});