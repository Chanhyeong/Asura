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
var PlanComponent = (function () {
    function PlanComponent(cartService) {
        this.cartService = cartService;
        this.grid = [1, 2, 3];
        this.gridWidth = new Array(6);
        this.gridHeight = new Array(32);
        this.interval = 2000;
    }
    PlanComponent.prototype.getCart = function () {
        this.cartService.getCart().then();
    };
    PlanComponent = __decorate([
        core_1.Component({
            selector: 'plan',
            templateUrl: 'public/javascripts/app/plan.component.html',
            providers: [cart_service_1.CartService]
        }), 
        __metadata('design:paramtypes', [cart_service_1.CartService])
    ], PlanComponent);
    return PlanComponent;
}());
exports.PlanComponent = PlanComponent;
//# sourceMappingURL=plan.component.js.map