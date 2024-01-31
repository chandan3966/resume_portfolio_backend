const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const achieveSchema = new Schema({
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
    type: String, // Consider using Date type if you have standardized date formats
    required: true
  },
  endDate: {
    type: String, // Same consideration for Date type applies here
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
  image: {
    type: String,
    required: true
  },
  redirecturl: {
    type: String,
    required: true
  }
});

const AchievementSchema = new mongoose.Schema({
    items: [achieveSchema]
  });

const Achievement = mongoose.model('achievements', AchievementSchema);

module.exports = Achievement;