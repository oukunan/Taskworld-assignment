const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  language: {
    type: String,
    required: true
  },
  timezone: {
    type: String,
    required: true
  },
  currency: {
    type: String,
    required: true
  },
  visibility: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  uid: String
});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = { Preference };
