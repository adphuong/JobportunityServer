// models/Job.js

const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
  company: {
    type: String,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  stage: {
    type: String,
    required: true
  },
  next_step: {
    type: String,
    required: true
  },
  date_applied: {
    type: Date
  },
  notes: {
    type: String
  }
});


mongoose.model("Job", JobSchema);
// module.exports = Job = mongoose.model('job', JobSchema);