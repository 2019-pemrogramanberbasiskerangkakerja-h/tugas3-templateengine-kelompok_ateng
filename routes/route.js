var express = require('express');
var router = express.Router();

var indexData = [
  {
    images : "img/l1.jpg",
      title:     "A Discount Toner Cartridge Is Better Than Ever.",
      user:   "Ateng",
      calendar: "03 April, 2019",
      comment: "06 Comments",
      excert: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  }, 
  {
    images : "img/l2.jpg",
    title:     "A Discount Toner Cartridge Is Better Than Ever.",
    user:   "Ateng",
    calendar: "03 April, 2019",
    comment: "06 Comments",
    excert: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  }, 
  {
    images : "img/l3.jpg",
    title:     "A Discount Toner Cartridge Is Better Than Ever.",
    user:   "Ateng",
    calendar: "03 April, 2019",
    comment: "06 Comments",
    excert: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  }, 
  {
    images : "img/l4.jpg",
    title:     "A Discount Toner Cartridge Is Better Than Ever.",
    user:   "Ateng",
    calendar: "03 April, 2019",
    comment: "06 Comments",
    excert: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt."
  } 

];

router.get('/', function(req, res, next) {
  res.render('index', {layout: 'base', datas: indexData});
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