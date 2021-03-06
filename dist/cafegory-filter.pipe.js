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
 * Created by chanhyeong on 2016-12-07.
 */
var _ = require("lodash");
var core_1 = require("@angular/core");
var DepartFilterPipe = (function () {
    function DepartFilterPipe() {
    }
    DepartFilterPipe.prototype.transform = function (array, query) {
        if (query && !(query.valueOf() === "교과구분(과목분류)")) {
            return _.filter(array, function (row) { return row.department.indexOf(query) > -1; });
        }
        return array;
    };
    DepartFilterPipe = __decorate([
        core_1.Pipe({
            name: "cafetegoryFilter"
        }), 
        __metadata('design:paramtypes', [])
    ], DepartFilterPipe);
    return DepartFilterPipe;
}());
exports.DepartFilterPipe = DepartFilterPipe;
//# sourceMappingURL=cafegory-filter.pipe.js.map