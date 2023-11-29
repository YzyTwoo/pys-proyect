var express = require('express');
var router = express.Router();

let indexController = require('../controllers/indexController.js')
/* GET home page. */
router.get('/', indexController.home);
router.get('/detalle/:id', indexController.detalle)

module.exports = router;
