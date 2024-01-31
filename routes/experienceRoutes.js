const express = require('express');
const experienceController = require('../controller/experienceController');


const experienceRoute = express.Router();

experienceRoute.route('/').get(experienceController.getAllExperiences)

experienceRoute.route('/:id').get(experienceController.getOneExperience)

module.exports = experienceRoute;
