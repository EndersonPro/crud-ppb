var express = require('express');
var router = express.Router();

var PersonasController = require('../controllers/PersonasControllers')

router.get('/', PersonasController.list)
router.post('/', PersonasController.add)
router.delete('/delete/:id', PersonasController.delete)

module.exports = router;