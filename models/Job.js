// models/Job.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const JobSchema = new Schema({
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

// const Job = mongoose.model("Job", JobSchema);
// module.exports = Job;
// mongoose.model("Job", JobSchema);
module.exports = mongoose.model('Job', JobSchema);