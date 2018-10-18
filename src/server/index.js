require('./config/config');

const express = require('express');
const bodyParser = require('body-parser');
const cookeParser = require('cookie-parser');

const session = require('express-session');
const cors = require('cors');

const { mongoose } = require('./db/mongoose');
const { User } = require('./models/User');
const { Preference } = require('./models/Preference');

const app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'UPDATE', 'DELETE'],
    credentials: true
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookeParser());

app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  })
);

app.get('/user', (req, res) => {
  User.find().then(user => {
    res.json({ user });
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
        req.session.email = user.email;
        req.session._id = user._id;
        res.status(200).json({ email: user.email, id: user._id });
      }
    }
  });
});

app.post('/logout', (req, res) => {
  req.session.destroy();
});

app.get('/session', (req, res) => {
  let sess = req.session;
  res.status(200).send({ email: sess.email, id: sess._id });
});

app.get('/preference/:id', (req, res) => {
  const id = req.params.id;
  Preference.findOne({
    uid: id
  })
    .then(item => {
      if (!item) {
        return res.status(404).send();
      }
      res.status(200).send({ item });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.post('/preference', (req, res) => {
  Preference.updateOne(
    req.body.user,
    req.body,
    { upsert: true },
    (err, records) => {
      if (err) throw err;
      res.status(200).send({ records });
    }
  );
});

app.delete('/preference/:id', (req, res) => {
  const id = req.params.id;
  Preference.findOneAndDelete({
    uid: id
  })
    .then(item => {
      if (!item) {
        return res.status(404).send();
      }
      res.status(200).send({ item });
    })
    .catch(e => {
      res.status(400).send();
    });
});

app.listen(8080, () => console.log('Listening on port 8080!'));

module.exports = { app };
