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
 * Created by chanhyeong on 2016-11-03.
 */
var core_1 = require('@angular/core');
var circle_1 = require('./circle');
var AppComponent = (function () {
    function AppComponent() {
        this.c1 = new circle_1.Circle();
        this.c2 = new circle_1.Circle();
    }
    AppComponent.prototype.change = function () {
        if (this.c1.r != 0 && this.c2.r != 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'circle',
            template: "\n<label>c1: ({{c1.x}}, {{c1.y}}, {{c1.r}})</label>\n<input [(ngModel)] = \"c1.x\">\n<input [(ngModel)] = \"c1.y\">\n<input [(ngModel)] = \"c1.r\"> <br>\n\n<label>c2: ({{c2.x}}, {{c2.y}}, {{c2.r}})</label>\n<input [(ngModel)] = \"c2.x\">\n<input [(ngModel)] = \"c2.y\">\n<input [(ngModel)] = \"c2.r\"> <br>\n\n<distance [change]=\"change()\" [c1] = \"c1\" [c2] = \"c2\"></distance>\n<intersect [change]=\"change()\" [c1] = \"c1\" [c2] = \"c2\"></intersect>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map