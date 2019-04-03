var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {layout: 'base', template: 'home-template'});
  // res.render('index');
});

module.exports = router;