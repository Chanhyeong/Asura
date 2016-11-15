var express = require('express');
var app = express();
var router = express.Router();
app.set('view engine', 'jade');
app.set('views','/views');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index')
});

module.exports = router;
