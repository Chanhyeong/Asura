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
            res.render('login', {title: "아수라 로그인"});
        }
        else {
            res.render('login', {login_success: false});
        }
    });

    router.get('/signup', function (req,res, next) {

        res.render('signup', {title: "아수라 로그인"});
    });

    router.get('/profile', function (req, res,next) {
        if (!req.isAuthenticated()) {
            res.redirect('/');
        }
        else {
            console.log(req.user);
            if (Array.isArray(req.user)) {
                res.render('profile', {title: "로그인 성공!!!", user: req.user[0]._doc});
            } else {
                res.render('profile', {title: "로그인 성공!!", user: req.user});
            }
        }
    });


    router.post('/login',
        passport.authenticate('local-login', {
            successRedirect: '/profile',
            failureRedirect: '/login',
            failureFlash: true
        })
    );

module.exports = router;
