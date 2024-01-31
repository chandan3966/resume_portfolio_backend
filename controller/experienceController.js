const Experience = require('../models/experienceModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');


exports.getAllExperiences = factory.getAll(Experience);

exports.getOneExperience = factory.getOne(Experience);