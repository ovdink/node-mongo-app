const { Schema, model } = require('mongoose');

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  nominal: {
    type: Number,
    required: true
  },
  value: {
    type: Number,
    required: true
  },
  charCode: {
    type: String,
    required: true
  }
});

module.exports = model('Currencies', schema);
