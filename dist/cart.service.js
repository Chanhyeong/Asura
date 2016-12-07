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
var lecture_data_1 = require('./lecture-data');
var http_1 = require('@angular/http');
var Rx_1 = require('rxjs/Rx');
require('rxjs/add/operator/toPromise');
require('rxjs/add/operator/map');
var CartService = (function () {
    function CartService(http) {
        this.http = http;
        this.CartUrl = '../cart'; // URL to Web API
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    CartService.prototype.getLectures = function () {
        return Promise.resolve(lecture_data_1.LECTURES);
    };
    CartService.prototype.getCart = function () {
        return this.http.get(this.CartUrl)
            .map(function (res) { return res.json(); })
            .catch(this.handleError);
    };
    CartService.prototype.saveCart = function (cart) {
        return this.http
            .put(this.CartUrl, JSON.stringify(cart), { headers: this.headers })
            .toPromise()
            .then(function () { return cart; })
            .catch(this.handleError);
    };
    /*
    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    */
    CartService.prototype.handleError = function (error) {
        console.error(error);
        return Rx_1.Observable.throw(error.json().error || 'Server error');
    };
    CartService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CartService);
    return CartService;
}());
exports.CartService = CartService;
//# sourceMappingURL=cart.service.js.map