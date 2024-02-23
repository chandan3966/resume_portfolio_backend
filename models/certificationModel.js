const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const certificationSchema = new Schema({
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
    required: false // Since startDate is empty in your data
  },
  endDate: {
    type: String, // Same consideration for Date type applies here
    required: true
  },
  desc: {
    type: [String],
    required: true
  },
  instructor: {
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

const CertifiactionSchema = new mongoose.Schema({
    items: [certificationSchema]
  });

const Certification = mongoose.model('certifications', CertifiactionSchema);

module.exports = Certification;