var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/', function(req, res, next) {
  if(req.user == undefined){
    res.send("로그인 해주세여");
  }
  res.sendFile(path.join(__dirname, '../', 'views', 'timetable.html'));

});

module.exports = router;
