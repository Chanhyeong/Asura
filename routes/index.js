var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');
var mongodb = require('mongodb');
var mongoose = require('mongoose');

/* GET home page. */



router.get('/', function (req, res,next) {
    if (req.user == undefined) {
        res.render('index', {login_success: false});
    }
    else {
        res.render('index', {login_success: true});
    }
});
 router.get('/login', function (req, res,next) {
     if (req.user == undefined) {
         res.render('login', {login_success: false, title: "아수라 로그인",message: req.flash('loginMessage')});
     }
     else {
         res.render('login', {login_success: true});
     }
 });

router.get('/signup', function (req,res, next) {
     res.render('signup', {title: "아수라 로그인",message: req.flash('signupMessage')});
});


router.get('/cart', function (req, res,next) { // get
    var database = req.app.get('database');
    database.UserModel.findOne({ 'email' : req.user.email}, function(err, user) {
        console.log("get cart DBinfo... " + req.user.email);
        if (err) {
            console.log(err);
            return done(err);
        }
        console.log("user info... is "+user);
        var cart = {
            "email": user.email,
            "name": user.name,
            "plan" : user.plan
        };
        console.log("DB에 저장된 수강정보 전송완료");
        res.json(cart);
    });

});

router.put('/cart/:email', function (req, res,next) { // update
    var database = req.app.get('database');
    database.UserModel.findOne({ 'email' : req.params.email}, function(err, user) {
        if (err) { console.log(err); return done(err); }
        database.UserModel.update({email: req.body.email},
            {$set:{plan  : req.body.plan  }},function(err,result){});
        console.log("..... 수강정보 저장완료");
        // res.redirect('/timetable');
    });
});
router.post('/login',
    passport.authenticate('local-login', {
        successRedirect: '/timetable',
        failureRedirect: '/login',
        failureFlash: true
    })
);
router.post('/login/:id',function(req,res,next){



});
router.post('/signup',
    passport.authenticate('local-signup', {
        successRedirect : '/timetable',
        failureRedirect : '/signup',
        failureFlash : true
    })
);


// 패스포트 - 페이스북 인증 라우팅
router.get('/auth/facebook',
    passport.authenticate('facebook', {
        scope : 'email'
    })
);

// 패스포트 - 페이스북 인증 콜백 라우팅
router.get('/auth/facebook/callback',
    passport.authenticate('facebook', {
        successRedirect : '/timetable',
        failureRedirect : '/'
    })
);

router.get('/logout', function(req, res) {
    console.log('/logout 패스 요청됨.');
    req.logout();
    res.redirect('/');
});
module.exports = router;
