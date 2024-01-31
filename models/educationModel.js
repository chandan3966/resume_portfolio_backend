const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const educationSubSchema = new Schema({
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
    type: String, // You could also convert this to a Date type if you're planning to store actual dates
    required: true
  },
  endDate: {
    type: String, // This could also be a Date type or String to allow for values like "Current"
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  jobtype: {
    type: String,
    required: true,
    enum: ['full-time', 'part-time', 'internship'] // Assuming "jobtype" reflects the engagement level in the program
  },
  companyurl: {
    type: String,
    required: true
  }
});

const educationSchema = new Schema({
    items: [educationSubSchema]
  });


const Education = mongoose.model('educations', educationSchema);

module.exports = Education;