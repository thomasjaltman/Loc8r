var express = require('express');
var router = express.Router();
var ctrl = require('../controllers/main');

/* GET home page. */
router.get('/', ctrl.angularApp);

/*
router.get('/about', ctrl.about);
*/

module.exports = router;

