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
var cart_service_1 = require('./cart.service');
var TableComponent = (function () {
    function TableComponent(cartService) {
        this.cartService = cartService;
        this.lectures = lecture_data_1.LECTURES;
    }
    TableComponent.prototype.getCart = function () {
        // this.cartService.getCart().then();
    };
    TableComponent = __decorate([
        core_1.Component({
            selector: 'class-info',
            templateUrl: 'public/javascripts/app/table.component.html',
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map