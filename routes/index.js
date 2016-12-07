var express = require('express');
var router = express.Router();
var path = require('path');
var passport = require('passport');

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

router.get('/profile', function (req, res,next) {
    if (!req.isAuthenticated()) {
        res.redirect('/');
    }
    else {
        console.log("성공!");
        console.log(req.user);
        if (Array.isArray(req.user)) {
            console.log("이것은.... " + req.user[0]._doc);
           // res.render('profile', {title: "로그인 성공!!!", user: req.user[0]._doc});
        } else {
           console.log("저것은..... " +req.user.planA);
            console.log("저것은..... " +req.user.name);
           // res.render('profile', {title: "로그인 성공!!", user: req.user});
        }
    }
});
router.get('/cart', function (req, res,next) {
    console.log("여기로 왔나요...?");
    var cart = {
        "email": "highalps@naver.com",
        "name": "highalps",
        "planA": ['E001','E003'],
        "planB": [],
        "planC": [],
        "planD": [],
        "planE": []
    };
    //cart = JSON.parse(cart);
    //console.log(cart);
    res.json(cart);
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
        successRedirect : '/profile',
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
        successRedirect : '/profile',
        failureRedirect : '/'
    })
);

router.get('/logout', function(req, res) {
    console.log('/logout 패스 요청됨.');
    req.logout();
    res.redirect('/');
});
module.exports = router;
