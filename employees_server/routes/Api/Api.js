var express = require('express');
var router = express.Router();            
const apiController = require ('../../controllers/apiController');

router.get('/employees', apiController.listEmployees);

module.exports = router;