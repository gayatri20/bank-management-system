const { Customer } = require('../../../models/customer');
const jwt = require('jsonwebtoken');
const config = require('config');
const mongoose = require('mongoose');
let server;

describe('customer.generateAuthToken', () => {
    beforeEach(() => { server = require('../../../index'); })
    afterEach( () => {  server.close(); });

    it('should return a valid JWT', () => {
        const expectedPayload = {
            _id: new mongoose.Types.ObjectId().toHexString(),
            accountNumber: 123456789012

        };
        const customer = new Customer(expectedPayload);
      
        const token = customer.generateAuthToken();
        const decoded = jwt.verify(token, config.get('jwtPrivateKey'));
        
        expect(decoded).toMatchObject(expectedPayload);

    });
});