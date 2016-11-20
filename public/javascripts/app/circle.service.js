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
var CircleService = (function () {
    function CircleService() {
    }
    CircleService.prototype.calculateDistance = function (c1, c2) {
        return Math.sqrt(Math.pow((c1.x - c2.x), 2) + Math.pow((c1.y - c2.y), 2));
    };
    ;
    CircleService.prototype.isIntersect = function (c1, c2) {
        if (this.calculateDistance(c1, c2) > -(-c1.r - c2.r)) {
            return false;
        }
        else {
            return true;
        }
    };
    ;
    CircleService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], CircleService);
    return CircleService;
}());
exports.CircleService = CircleService;
//# sourceMappingURL=circle.service.js.map