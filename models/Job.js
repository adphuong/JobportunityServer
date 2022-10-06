// models/Job.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Joi = require("joi");      // object schema descriptions to validate JS objects


const JobSchema = new Schema({
  company: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true
  },
  position: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 255,
    trim: true
  },
  job_link: {
      type: String,
      required: false,
      trim: true
  },
  stage: {
    type: String,
    default: "Prospect",
    required: true,
    trim: true,
    // check if the value given is an item in the array.
    enum: [
      "Prospect",
      "Applied",
      "Phone Screen",
      "Online Assessment",
      "Interview: Phone",
      "Interview: Virtual",
      "Interview: In-office",
      "Negotiating Offer",
      "Rejection",
      "Closed",
      "Offer"
    ]
  },
  next_step: {
    type: String,
    default: "Apply",
    required: true,
    trim: true,
    
    enum: [
      "Apply",
      "Research",
      "Follow-up Application",
      "Do interview(s)",
      "Email: Thank you"
    ]
  },
  date_found: {
    type: String,
    required: true,
    trim: true
  },
  date_applied: {
    type: String,
    default: "----",
    required: false,
    trim: true
  },
  notes: {
    type: String,
    trim: false
  },
  user_id: {
    type: String,
    required: true
  }
});


  
// const Job = mongoose.model("Job", JobSchema);
// module.exports = Job;
// mongoose.model("Job", JobSchema);
module.exports = mongoose.model('Job', JobSchema);