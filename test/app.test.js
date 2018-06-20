import supertest from 'supertest';
import app from './../app';

describe('App', () => {
  it('GET / responds 200', () => (
    request(app)
      .get('/user')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  ));
});