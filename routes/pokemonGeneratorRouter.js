var express = require('express');
var router = express.Router();
var randomMonController = require('../controllers/pokemonGeneratorController');

/* GET static pokemon listing. */
router.get('/static', function(req, res, next) {
  res.send(randomMonController.getStaticMon(req.body));
});

/* GET random pokemon from json file */
router.get('/random', function(req, res, next) {
  res.send(randomMonController.getRandomMon(req.body));
});

/* GET random pokemon using current date as seed */
router.get('/daily', function(req, res, next) {
  res.send(randomMonController.getCurrentDateMon(req.body));
});

module.exports = router;
