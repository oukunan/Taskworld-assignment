const mongoose = require('mongoose');

const preferenceSchema = new mongoose.Schema({
  language: String,
  timezone: String,
  currency: String,
  visibility: String,
  message: String,
  category: String,
  uid: String
});

const Preference = mongoose.model('Preference', preferenceSchema);

module.exports = { Preference };
