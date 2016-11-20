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
/**
 * Created by chanhyeong on 2016-11-17.
 */
var core_1 = require('@angular/core');
var core_2 = require('@angular/core');
var circle_1 = require('./circle');
var circle_service_1 = require("./circle.service");
var CircleDistanceComponent = (function () {
    function CircleDistanceComponent(circleService) {
        this.circleService = circleService;
    }
    __decorate([
        core_2.Input(), 
        __metadata('design:type', circle_1.Circle)
    ], CircleDistanceComponent.prototype, "c1", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', circle_1.Circle)
    ], CircleDistanceComponent.prototype, "c2", void 0);
    __decorate([
        core_2.Input(), 
        __metadata('design:type', Boolean)
    ], CircleDistanceComponent.prototype, "change", void 0);
    CircleDistanceComponent = __decorate([
        core_1.Component({
            selector: 'distance',
            providers: [circle_service_1.CircleService],
            template: "\n<div *ngIf = \"c1 && c2 && change\">\n<p>||c1-c2|| : {{circleService.calculateDistance(c1, c2)}}</p>\n</div>\n"
        }), 
        __metadata('design:paramtypes', [circle_service_1.CircleService])
    ], CircleDistanceComponent);
    return CircleDistanceComponent;
}());
exports.CircleDistanceComponent = CircleDistanceComponent;
//# sourceMappingURL=circle-distance.component.js.map