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
 * Created by chanhyeong on 2016-11-21.
 */
var core_1 = require('@angular/core');
var lecture_data_1 = require('./lecture-data');
var TableComponent = (function () {
    function TableComponent() {
        this.lectures = lecture_data_1.LECTURES;
    }
    TableComponent = __decorate([
        core_1.Component({
            selector: 'list',
            template: "<table class=\"table-fill\">\n    <thead>\n      <tr>\n        <th class=\"\">\uC218\uAC15\uBC88\uD638</th>\n        <th class=\"\">\uAC1C\uC124\uD559\uBD80</th>\n        <th class=\"\">\uAC1C\uC124\uC804\uACF5</th>\n        <th class=\"\">\uACFC\uBAA9\uBD84\uB958</th>\n        <th class=\"\">\uACFC\uBAA9\uBA85</th>\n        <th class=\"\">\uC601\uBB38 \uACFC\uBAA9\uBA85</th>\n        <th class=\"\">\uACF5\uD559\uC778\uC99D</th>\n        <th class=\"\">\uD559\uC810</th>\n        <th class=\"\">\uC2DC\uAC04</th>\n        <th class=\"\">\uAD50\uC218\uBA85</th>\n        <th class=\"\">\uAC15\uC758 \uC2DC\uAC04</th>\n        <th class=\"\">\uC601\uC5B4 \uAC15\uC758</th>\n        <th class=\"\">\uC815\uC6D0</th>\n        <th class=\"\">\uC5EC\uC11D</th>\n        <th class=\"\">\uC81C\uAC70</th>\n        <th class=\"\">\uCD94\uAC00</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-hover\">\n    <tr *ngFor=\"let lecture of lectures | slice:0:2\">\n        <td class=\"code\">{{lecture.code}}</td>\n        <td class=\"department\">{{lecture.department}}</td>\n        <td class=\"major\">{{lecture.major}}</td>\n        <td class=\"category\">{{lecture.category}}</td>\n        <td class=\"title\">{{lecture.krTitle}}</td>\n        <td class=\"enTitle\">{{lecture.enTitle}}</td>\n        <td class=\"abeek\">{{lecture.abeek}}</td>\n        <td class=\"point\">{{lecture.point}}</td>\n        <td class=\"time\">{{lecture.time}}</td>\n        <td class=\"professor\">{{lecture.professor}}</td>\n        <td class=\"timetable\">{{lecture.timetable}}</td>\n        <td class=\"enLecture\">{{lecture.enLecture}}</td>\n        <td class=\"total\">{{lecture.total}}</td>\n        <td class=\"leftSeat\"></td>\n        <td class=\"remove\"></td>\n        <td class=\"add\"></td>\n    </tr>\n    \n    </tbody>\n    </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TableComponent);
    return TableComponent;
}());
exports.TableComponent = TableComponent;
//# sourceMappingURL=table.component.js.map