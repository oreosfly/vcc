const request = require('supertest');
describe('GET /user', function() {
  it('respond with json', function(done) {
    request(“http://localhost:3000”)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});