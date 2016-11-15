var express = require('express');
var app = express();
var router = express.Router();
var mongoose  = require('mongoose');
app.set('view engine', 'html');
app.set('views','/views');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('./views/index2.html')
});

module.exports = router;
