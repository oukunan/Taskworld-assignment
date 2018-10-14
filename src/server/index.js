const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');

const { User } = require('./models/User');
const { Preference } = require('./models/Preference');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  })
);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/taskworld');

app.get('/user', (request, response) => {
  User.find().then(user => {
    response.json({ user });
  });
});
app.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (user) {
      res.status(401).json({ message: 'Email already used.' });
    } else {
      const user = new User(req.body);
      user
        .save()
        .then(item => {
          res.status(200).send(user.email + ' ' + user._id);
        })
        .catch(err => {
          res.status(400).send('unable to save to database');
        });
    }
  });
});

app.post('/login', (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res
        .status(401)
        .json({ message: 'Authentication failed. User not found.' });
    } else if (user) {
      if (user.password !== req.body.password) {
        res
          .status(401)
          .json({ message: 'Authentication failed. Wrong password.' });
      } else {
        let sess = req.session;
        sess.email = user.email;
        sess._id = user._id;
        res.status(200).json({ email: user.email, id: user._id });
      }
    }
  });
});

app.get('/session', (req, res) => {
  let sess = req.session;
  res.status(200).json({ email: sess.email, id: sess._id });
});

app.post('/preference', (req, res) => {
  Preference.update(req.body.user, req.body, { upsert: true }, (err, user) => {
    if (err) throw err;
  });
});

app.delete('/preference', (req, res) => {
  const id = req.body.uid;

  Preference.findOneAndRemove({
    uid: id
  }).then(item => {
    if (!item) {
      return res.status(404).send();
    }
    res.send({ item });
  });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
