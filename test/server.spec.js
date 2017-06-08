const request = require('supertest');

const app = require('../server');

describe('index', () => {
  describe('GET /', () => {
    it('Hello World', () => {
      return request(app)
        .get('/')
        .expect(200)
        .expect('Content-Type', /html/)
        .expect(/Hello World!/);
    });
  });
});
