var express = require('express');
var router = express.Router();

var PersonasController = require('../controllers/PersonasControllers')

router.get('/', PersonasController.list)
router.post('/add', PersonasController.add)

module.exports = router;