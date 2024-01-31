const Education = require('../models/educationModel');
const factory = require('./handlerFactory');

exports.getAllEducation = factory.getAll(Education);

exports.getOneEducation = factory.getOne(Education);