var express = require('express');
var router = express.Router();            
const apiController = require ('../../controllers/apiController');

router.get('/employees', apiController.listEmployees);
router.post('/employees', apiController.createEmployee);
router.get('/Areas', apiController.listAreas);
router.post('/employees/:id', apiController.deleteEmployee);
router.post('/edit/:id', apiController.deleteEmployee);

module.exports = router;