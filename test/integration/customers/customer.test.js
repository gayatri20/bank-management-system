
const request = require('supertest');
let server;
const { Customer } = require('../../../models/customer');
const mongoose = require('mongoose');
describe('View customer details', () => {

    beforeEach(() => { server = require('../../../index'); });
    afterEach(async() => { server.close(); await Customer.remove({}); });

    describe('GET /', () => {
        it('should return the customer data', async () => {
            const res = await request(server).get('/bank/customer/view/me');
            expect(res.status).toBe(400);
        });
    });

    // describe('POST /', () => {
    //     it('should save the customer data', async () => {
    //         const res = await request(server)
    //             .post('/bank/customer/register')
    //             .send({
    //                 name: "gayatri",
    //                 accountType: "current",
    //                 accountNumber: 800165432121,
    //                 email: "gay@gamil.com",
    //                 phone: 1232511890,
    //                 password: "123@asd",
    //                 pan: "ABCDE1234K",
    //                 address: "Trimurti nagar",
    //                 state: "maharshatra",
    //                 country: "India"
    //             });
    //        // const customer = await Customer.find();

    //         expect(res.status).toBe(200);
    //     });
    // });
});