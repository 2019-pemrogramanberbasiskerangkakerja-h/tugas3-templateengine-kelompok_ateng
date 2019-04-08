var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {layout: 'base', template: 'home-template'});
});

router.get('/post', function(req, res, next) {
  res.render('post', {layout: 'base', template: 'home-template'});
});

router.get('/contact', function(req, res, next) {
  res.render('contact', {layout: 'static', template: 'home-template'});
});

router.get('/about', function(req, res, next) {
  res.render('about', {layout: 'static', template: 'home-template'});
});


module.exports = router;