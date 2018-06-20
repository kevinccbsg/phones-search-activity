import request from 'supertest';
import app from './../app';
import mockData from '../mockData';

const phonesEndpoint = '/api/phones';

describe('App', () => {
  it(`GET ${phonesEndpoint} responds 200`, () => (
    request(app)
      .get(phonesEndpoint)
      .expect('Content-Type', /json/)
      .expect(200)
      .then(response => {
        expect(response.body.data).toEqual(mockData);
      })
  ));

  it('GET / responds 200', () => (
    request(app)
      .get('/')
      .expect('Content-Type', /text\/html/)
      .expect(200)
  ));
});