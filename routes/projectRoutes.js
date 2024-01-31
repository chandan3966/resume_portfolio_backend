const express = require('express');
const projectController = require('../controller/projectController');


const projectRoute = express.Router();

projectRoute.route('/').get(projectController.getAllProjects)

projectRoute.route('/:id').get(projectController.getOneProject)

module.exports = projectRoute;
