const request = require('supertest');
const routes = require('./routes');
const app = require('../app');

describe('auth', () => {
  describe('routes', () => {
    app.use('/auth', routes);

    it('should return a 404 on an invalid request', () => {
      return request(app)
        .get('/auth/foo/bar/baz')
        .expect(404);
    });

    it('should respond to a GET request', () => {
      return request(app)
        .get('/auth/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });

    it('should respond with expected results', () => {
      return request(app)
        .get('/auth/ping')
        .expect(200)
        .then(res => {
          expect(res.body.ping).toMatch(/ok/);
        });
    });
  });
});
