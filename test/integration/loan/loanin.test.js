// const request = require('supertest');
// const { Loan } = require('../../../models/loan')

// let server;
// let token;

// beforeAll((done) => {
//   request(app)
//     .post('/bank/customer/login')
//     .send({
//       username: "gayatri@gmail.com",
//       password: "12345dst",
//     })
//     .end((err, response) => {
//       token = response.body.token; // save the token!
//       done();
//     });
// });
// describe('Loan data', () => {

//     beforeEach(() => { server = require('../../../index'); });
//     afterEach(async () => { server.close(); await Loan.remove({}); });

//     describe('GET /', () => {

//         it('should return the 400 due to absense/invalid token', async () => {

//             const res = await request(server).get('/bank/customer/loan/view/me');
//             expect(res.status).toBe(200);

//         });
//     });
// });