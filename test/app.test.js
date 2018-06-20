import request from 'supertest';
import app from './../app';
import mockData from '../mockData';

const phonesEndpoint = '/api/phones';

describe('App', () => {
  it('GET / responds 200', () => (
    request(app)
      .get('/')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
  ));

  it(`GET ${phonesEndpoint} responds 200`, () => (
    request(app)
      .get(phonesEndpoint)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.data).toEqual(mockData);
      })
  ));
});