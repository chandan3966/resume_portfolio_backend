const express = require('express');
const achievementController = require('../controller/achievementController');

const achieveRoute = express.Router();

achieveRoute.route('/').get(achievementController.getAllAchievement)
achieveRoute.route('/:id').get(achievementController.getOneAchievement)
 
module.exports = achieveRoute;
     