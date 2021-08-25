const {Customer} = require('../../models/customer');
const {Loan} = require('../../models/loan');
const request = require('supertest');

describe('auth middleware', () => {
  beforeEach(() => { server = require('../../index'); })
  afterEach(async () => { 
     server.close(); await Loan.remove({});
  });

  let token; 

  const exec = () => {
    return request(server)
      .post('/bank/customer/loan/apply/me')
      .set('x-auth-token', token)
      .send({
        loanType: "education",
        accountNumber:123456789012,
        loanAmount: 1110000.23,
        loanDuration: "5 years"
    });
  }

  beforeEach(() => {
    token = new Customer().generateAuthToken();
  });

  it('should return 400 if no token is provided', async () => {
    token = ''; 

    const res = await exec();
    expect(res.status).toBe(400);
  });

  it('should return 400 if token is invalid', async () => {
    token = 'a'; 

    const res = await exec();
    expect(res.status).toBe(400);
  });

  it('should return 400 if token is valid', async () => {
    const res = await exec();
    expect(res.status).toBe(400);
  });
});