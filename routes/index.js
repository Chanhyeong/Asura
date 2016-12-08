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


router.get('/cart', function (req, res,next) {
    var cart = {
        "email": req.user.email,
        "name": req.user.name,
        "planA": req.user.planA,
        "planB": req.user.planB,
        "planC": req.user.planC,
        "planD": req.user.planD,
        "planE": req.user.planE
    };
    console.log("DB에 저장된 수강정보 전송완료");
    res.json(cart);
});
router.put('/cart/:email', function (req, res,next) {

    console.log(req.params.email);
    /*
  var database = app.get('database');
    database.UserModel.findOne({ 'email' : req.params.email}, function(err, user) {
        console.log(req.params.email);
        if (err) { return done(err); }
        var collections = database.collection('users');
        collections.update({email: req.body.email},
            {$set:{planA : req.body.planA,planB : req.body.planB,planC : req.body.planC,
                   planD : req.body.planD,planE : req.body.planE }},function(err,result){
            });
        console.log("..... 수강정보 저장완료");
        res.redirect('/timetable');
    });
    */
    // index.js에서 Database에 접근하는 방법을 알아내야함(저장버튼 기능)
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
