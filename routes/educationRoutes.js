const express = require('express');
const educationController = require('../controller/educationController');


const educationRoute = express.Router();

educationRoute.route('/').get(educationController.getAllEducation)

educationRoute.route('/:id').get(educationController.getOneEducation)

module.exports = educationRoute;
