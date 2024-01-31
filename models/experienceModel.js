const mongoose = require('mongoose');

const experienceSubSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    },
    startDate: {
      type: String, // Consider using Date type for actual date querying
      required: true
    },
    endDate: {
      type: String, // Use String to accommodate 'Current' or similar values
      required: true
    },
    desc: {
      type: String,
      required: true
    },
    jobtype: {
      type: String,
      required: true
    },
    skills: [{
      type: String
    }],
    companyurl: {
      type: String,
      required: true
    }
});

const ExperienceSchema = new mongoose.Schema({
  items: [experienceSubSchema]
});

const Experience = mongoose.model('experiences', ExperienceSchema);

module.exports = Experience;