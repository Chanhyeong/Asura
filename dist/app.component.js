"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var cart_service_1 = require('./cart.service');
var _ = require("lodash");
var AppComponent = (function () {
    function AppComponent(cartService) {
        this.cartService = cartService;
        this.day = { 월: 0, 화: 1, 수: 2, 목: 3, 금: 4 };
        this.my_cart = [[], [], [], [], []];
        this.view_cart = [];
        this.table = new Array(36);
        this.now_index = 0;
        this.selectedDepart = "개설학과";
        this.selectedMajor = "개설전공";
        this.selectedCategory = "교과구분(과목분류)";
        this.selectedDate = "요일";
        this.selectedTime = "시간";
        this.timeQuery = "";
        this.listNum = 5;
    }
    AppComponent.prototype.onScrollDown = function () {
        this.listNum += 2;
    };
    AppComponent.prototype.setListNumInit = function () {
        this.listNum = 5;
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getLecture(); // 모든 수강정보 가져옴
        for (var i = 0; i < 36; i++) {
            this.table[i] = new Array(6).fill("#FFFFFF");
        }
    };
    AppComponent.prototype.getLecture = function () {
        var _this = this;
        this.cartService.getLectures()
            .subscribe(function (lectures) { return _this.lectures = lectures; }, function (err) { return console.log(err); }, function () {
            _this.departList = _.uniqBy(_this.lectures, 'department');
            _this.majorList = _.uniqBy(_this.lectures, 'major');
            _this.getCart();
        });
    };
    AppComponent.prototype.otherPlan = function (c) {
        for (var i = 0; i < 36; i++) {
            this.table[i] = new Array(6).fill("#FFFFFF");
        }
        this.now_index = c;
        var _cart = this.my_cart[c];
        this.view_cart = [];
        for (var i = 0; i < _cart.length; i++) {
            var _index = this.lectures.findIndex(function (x) { return x.code == _cart[i]; });
            this.timeSpread(this.lectures[_index]);
            this.view_cart.push(this.lectures[_index]);
        }
    };
    AppComponent.prototype.getCart = function () {
        var _this = this;
        this.cartService.getCart()
            .subscribe(function (DBinfo) { return _this.DBinfo = DBinfo; }, function (err) { return console.log(err); }, function () { _this.makeFromCart(); });
    };
    AppComponent.prototype.makeFromCart = function () {
        var _this = this;
        console.log("load.....");
        this.my_cart = Object.values(this.DBinfo.plan);
        var _color = this.getRandomColor();
        for (var i = 0; i < this.my_cart[0].length; i++) {
            var _index = this.lectures.findIndex(function (x) { return x.code == _this.my_cart[0][i]; });
            var lecture = this.lectures[_index];
            this.view_cart.push(this.lectures[_index]);
            var string = lecture.timetable;
            var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
            var result = string.match(reg);
            var slice = this.calculateTime(result);
            for (var j = 0; j < slice.length; j++) {
                var y = this.day[slice[j].y];
                this.timeSpread(lecture);
            }
        }
    };
    ;
    AppComponent.prototype.timeSpread = function (lecture) {
        var string = lecture.timetable;
        var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
        var result = string.match(reg);
        var slice = this.calculateTime(result);
        var _color = this.getRandomColor();
        for (var i = 0; i < slice.length; i++) {
            var y = this.day[slice[i].y];
            for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                this.table[x][y] = _color;
                console.log(x + ',' + y + ',' + this.table[x][y]);
            }
        }
    };
    AppComponent.prototype.saveCart = function () {
        var _this = this;
        if (confirm('저장 하시겠습니까?')) {
            for (var i = 0; i < this.my_cart.length; i++) {
                console.log('my cart....' + this.my_cart[i]);
                this.DBinfo.plan[i] = [];
                for (var j = 0; j < this.my_cart[i].length; j++) {
                    console.log(this.my_cart[i][j]);
                    this.DBinfo.plan[i].push(this.my_cart[i][j]);
                }
            }
            this.cartService.saveCart(this.DBinfo)
                .subscribe(function (DBinfo) { return _this.DBinfo = DBinfo; }, function (err) { return console.log(err); }, function () { _this.makeFromCart(); });
        }
    };
    AppComponent.prototype.addToCart = function (lecture, _c) {
        var flag = false;
        if (_c == 0)
            flag = confirm('책가방에 추가 하시겠습니까?');
        else
            flag = true;
        if (flag == true) {
            if (this.my_cart[this.now_index].indexOf(lecture.code) == -1) {
                for (var w = 0; w < this.view_cart.length; w++) {
                    if (this.view_cart[w].enTitle == lecture.enTitle) {
                        alert("동일 과목 수강이 불가능 합니다.");
                        return;
                    }
                }
                var string = lecture.timetable;
                var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
                var result = string.match(reg);
                if (result.length == 0) {
                    this.my_cart[this.now_index].push(lecture.code);
                    return;
                }
                var _color = this.getRandomColor();
                var slice = this.calculateTime(result);
                for (var i = 0; i < slice.length; i++) {
                    var y = this.day[slice[i].y];
                    for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                        if (this.table[x][y] != "#FFFFFF") {
                            alert("시간이 중복되었습니다.");
                            return;
                        }
                    }
                }
                this.my_cart[this.now_index].push(lecture.code);
                this.view_cart.push(lecture);
                this.timeSpread(lecture);
            }
            else {
                alert("이미 책가방에 추가한 강의 입니다.");
            }
        }
    };
    AppComponent.prototype.deleteCart = function (lecture) {
        if (confirm('책가방에서 삭제 하시겠습니까?')) {
            var string = lecture.timetable;
            var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
            var result = string.match(reg);
            var slice = this.calculateTime(result);
            for (var i = 0; i < slice.length; i++) {
                var y = this.day[slice[i].y];
                for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                    this.table[x][y] = "#FFFFFF";
                }
            }
            var index = this.my_cart[this.now_index].indexOf(lecture.code);
            this.my_cart[this.now_index].splice(index, 1);
            index = this.view_cart.indexOf(lecture);
            this.view_cart.splice(index, 1);
        }
    };
    AppComponent.prototype.makeTimeQuery = function () {
        if ((this.selectedDate === "요일") && (this.selectedTime === "시간"))
            return "";
        else if (this.selectedDate === "요일")
            return this.selectedTime;
        else if (this.selectedTime === "시간")
            return this.selectedDate;
        else
            return this.selectedDate + this.selectedTime;
    };
    AppComponent.prototype.calculateTime = function (info) {
        var stack = new Array();
        for (var index = 0; index < info.length; index++) {
            var string = info[index];
            var x1, x2, y = string[0];
            var reg = /\w+/g;
            var result = string.match(reg);
            if (result.length == 1) {
                if ('A'.charCodeAt((0)) <= result[0].charCodeAt(0)
                    && result[0].charCodeAt((0)) <= 'Z'.charCodeAt((0))) {
                    x1 = 3 * (result[0].charCodeAt(0) - 'A'.charCodeAt(0)) + 2;
                    stack.push({ x1: x1, x2: x1 + 2, y: y });
                }
                else {
                    x1 = parseInt(result[0]) * 2;
                    stack.push({ x1: x1, x2: x1 + 1, y: y });
                }
            }
            else if (result.length == 2) {
                x1 = parseFloat(result[0]) * 2;
                stack.push({ x1: x1, x2: x1 + 1, y: y });
            }
            else {
                console.log(result);
                x1 = (parseInt(result[0]) - 8) * 2;
                if (result[1][0] == '3')
                    x1++;
                x2 = (parseInt(result[2]) - 8) * 2;
                if (result[3][0] == '3')
                    x2++;
                stack.push({ x1: x1, x2: x1 + 1, y: y });
            }
        }
        return stack;
    };
    AppComponent.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'asura-app',
            templateUrl: 'public/javascripts/app/timetable.html',
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map