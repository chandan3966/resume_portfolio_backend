const express = require('express');
const certificationController = require('../controller/certificationController');

const certificationRoute = express.Router();

certificationRoute.route('/').get(certificationController.getAllCertification)
certificationRoute.route('/:id').get(certificationController.getOneCertification)
 
module.exports = certificationRoute;
    