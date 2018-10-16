const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('supertest');
const { app } = require('../index');
const { Preference } = require('./../models/Preference');

const {
  users,
  preferences,
  populatePreferences,
  populateUsers
} = require('./seed/seed');

beforeEach(populateUsers);
beforeEach(populatePreferences);

describe('GET /preference/:id', () => {
  it('should get a preference', done => {
    request(app)
      .get(`/preference/${preferences[0].uid}`)
      .expect(200)
      .end(done);
  });

  it('should return 404 if preference not found', done => {
    request(app)
      .get(`/preference/${preferences[0]._id}`)
      .expect(404)
      .end(done);
  });
});

describe('POST for create a preference', () => {
  const data = {
    language: 'Thai',
    timezone: '+00:00)UTC',
    currency: 'THB',
    visibility: 'Private',
    message: 'Private',
    category: 'Enable',
    uid: users[1]._id.toHexString()
  };

  const updatedData = {
    language: 'English',
    timezone: '+00:00)UTC',
    currency: 'USD',
    visibility: 'Public',
    message: 'Public',
    category: 'Disable',
    uid: users[1]._id.toHexString()
  };

  it('should create a preference', done => {
    request(app)
      .post('/preference')
      .send(data)
      .expect(200)
      .end(err => {
        Preference.findOne(data)
          .then(res => {
            expect(res.uid).to.equal(data.uid);
            done();
          })
          .catch(e => done(e));
      });
  });

  it('should update exist preference', done => {
    request(app)
      .post('/preference')
      .send(updatedData)
      .expect(200)
      .end(err => {
        Preference.findOne(updatedData)
          .then(res => {
            const {
              language,
              timezone,
              currency,
              visibility,
              message,
              category,
              uid
            } = res;

            expect({
              language,
              timezone,
              currency,
              visibility,
              message,
              category,
              uid
            }).to.deep.equal(updatedData);
            done();
          })
          .catch(e => done(e));
      });
  });
});

describe('DELETE /preference/:id', () => {
  it('should remove a preference', done => {
    request(app)
      .delete(`/preference/${preferences[0].uid}`)
      .expect(200)
      .end(done);
  });

  it('should return 404 if preference not exist', done => {
    request(app)
      .delete(`/preference/${preferences[0]._id}`)
      .expect(404)
      .end(done);
  });
});
