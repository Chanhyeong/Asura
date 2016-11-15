var express = require('express');
var router = express.Router();
var mongoose  = require('mongoose');
var Schema = mongoose.Schema;
/* GET users listing. */

mongoose.connect('mongodb://52.78.103.203:27017/test');
var db = mongoose.connection;
var IDschema = mongoose.Schema({
  id: String,
  password: String
});
var ID = mongoose.model('ID',IDschema);

router.get('/', function(req, res, next) {
    var id = req.query.id;
    var pass = req.query.password;
    var user = new ID({id : id, password : pass});
    user.save(function(err,user){
      if(err)console.log("error");
      else res.send("OK");
    });

});

module.exports = router;
