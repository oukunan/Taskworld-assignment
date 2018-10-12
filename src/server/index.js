const express = require('express');
const bodyParser = require('body-parser');

var { Preference } = require('./models/Preference');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/taskworld');

// app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/addPreference', (req, res) => {
  const data = new Preference(req.body);
  data
    .save()
    .then(item => {
      console.log('item saved to database');
    })
    .catch(err => {
      res.status(400).send('unable to save to database');
    });
});

app.listen(8080, () => console.log('Listening on port 8080!'));
