const Certification = require('../models/certificationModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');


exports.getAllCertification = factory.getAll(Certification);

exports.getOneCertification = factory.getOne(Certification);