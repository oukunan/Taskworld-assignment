const { ObjectID } = require('mongodb');
const { Preference } = require('./../../models/Preference');
const { User } = require('./../../models/User');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();

const users = [
  {
    _id: userOneId,
    email: 'andrew@example.com',
    password: 'userOnePass'
  },
  {
    _id: userTwoId,
    email: 't@t.com',
    password: '111111'
  }
];

const preferences = [
  {
    _id: new ObjectID(),
    uid: userOneId,
    category: 'Enable',
    currency: 'USD',
    language: 'English',
    message: 'Everyone',
    timezone: '(+00:00)UTC',
    visibility: 'Private'
  }
];

const populatePreferences = done => {
  Preference.remove({})
    .then(() => {
      return Preference.insertMany(preferences);
    })
    .then(() => done());
};

const populateUsers = done => {
  User.remove({})
    .then(() => {
      let userOne = new User(users[0]).save();

      return Promise.all([userOne]);
    })
    .then(() => done());
};

module.exports = { preferences, populatePreferences, users, populateUsers };
