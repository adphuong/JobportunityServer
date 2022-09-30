// models/Job.js

const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  next_step: {
    type: String,
    required: true
  },
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  date_applied: {
    type: Date
  },
  stage: {
    type: String,
    required: true
  },
  notes: {
    type: String
  }
});

module.exports = Job = mongoose.model('job', JobSchema);