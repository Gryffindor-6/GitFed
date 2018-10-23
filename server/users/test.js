const request = require('supertest');
const routes = require('./routes');
const app = require('../app');

describe('users', () => {
  describe('routes', () => {
    app.use('/api/users', routes);

    it('should return a 404 on an invalid request', () => {
      return request(app)
        .get('/api/users/foo/bar/baz')
        .expect(404);
    });

    it('should respond to a GET request', () => {
      return request(app)
        .get('/api/users/ping')
        .expect(200)
        .expect('Content-Type', /application\/json/);
    });

    it('should respond with expected results', () => {
      return request(app)
        .get('/api/users/ping')
        .expect(200)
        .then(res => {
          expect(res.body.ping).toMatch(/ok/);
        });
    });
  });
});
