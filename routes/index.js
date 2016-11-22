var express = require('express');
var router = express.Router();
var path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login',{title :"아수라 로그인"});
});

router.get('/signup', function(req, res, next) {
  res.render('signup',{title:"아수라 회원가입"});
});


module.exports = router;
