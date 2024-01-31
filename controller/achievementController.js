const Achievement = require('../models/achievementModel');
const factory = require('./handlerFactory');
const catchAsync = require('../utils/catchAsync');


exports.getAllAchievement = factory.getAll(Achievement);

exports.getOneAchievement = factory.getOne(Achievement);