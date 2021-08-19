
const request = require('supertest');
const { Loan } = require('../../../models/loan')

let server;
describe('Loan data', () => {

    beforeEach(() => { server = require('../../../index'); });
    afterEach(async () => { server.close(); await Loan.remove({}); });

    describe('GET /', () => {
        it('should return the 400 due to absense/invalid token', async () => {

            const res = await request(server).get('/bank/customer/loan/view/me');
            expect(res.status).toBe(400);

        });
    });

    describe('POST /', () => {
        it('should return 400 if client is not logged in', async () => {
            const res = await request(server)
                .post('/bank/customer/loan/apply/me')
                .send({
                    loanType: "education",
                    loanAmount: 1110000.23,
                    loanDuration: "5 years"
                });

            expect(res.status).toBe(400);
        });


    });
    // describe('POST /', () => {
    //     it('should return 200 if client is logged in', async() => {
    //         const token = new Customer({
    //             email:"gayatri@gamil.com",
    //             password: "123@asd",
    //             accountNumber:899165432121
    //         }).generateAuthToken();
    //         console.log(token);

    //        // const token = JSON.parse("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFkNzUwZDljOTEyNDBkMGM5NmMxMTciLCJhY2NvdW50TnVtYmVyIjoiODk5MTY1NDMyMTIxIiwiaWF0IjoxNjI5MzIwNDYxfQ.aVnfPs3OtKxTAq-AFHAF8mh_IQTxTTgz8hEHw5Ir27c");

    //         const res = await request(server)
    //             .post('/bank/customer/loan/apply/me')
    //             .set('x-auth',token)
    //             .send({
    //             });

    //         expect(res.status).toBe(200);
    //     });
    // });

});