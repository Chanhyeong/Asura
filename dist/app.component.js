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
var AppComponent = (function () {
    function AppComponent(cartService) {
        this.cartService = cartService;
        this.cart = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCart();
    };
    AppComponent.prototype.getCart = function () {
        var _this = this;
        this.cartService.getLectures()
            .then(function (lectures) { return _this.lectures = lectures; });
    };
    AppComponent.prototype.addToCart = function (lecture) {
        console.log(lecture.professor);
        this.cart.push(lecture);
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