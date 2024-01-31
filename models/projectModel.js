const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  platform: {
    type: String,
    required: true
  },
  startDate: {
    type: String, // Consider using Date type if you need date-specific queries
    required: true
  },
  endDate: {
    type: String, // Consider using Date type or String if "In-progress"
    required: true
  },
  shortdesc: {
    type: String,
    required: true
  },
  desc: {
    type: String,
    required: true
  },
  techstack: [{
    type: String
  }],
  producturl: {
    type: String,
    required: false // Assuming it might be optional
  },
  document: {
    type: String,
    required: false // Assuming it might be optional
  },
  imageurl: {
    type: String,
    required: true
  }
},
{
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
},);

const ProjectSchema = new Schema({
  items: [projectItemSchema]
});

const Project = mongoose.model('projects', ProjectSchema);

module.exports = Project;