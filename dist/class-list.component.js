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
var ListComponent = (function () {
    function ListComponent() {
        this.lectures = lecture_data_1.LECTURES;
    }
    ListComponent = __decorate([
        core_1.Component({
            selector: 'class-list',
            template: "<table class=\"table-fill\">\n    <thead>\n      <tr>\n        <th class=\"code\">\uC218\uAC15\uBC88\uD638</th>\n        <th class=\"department\">\uAC1C\uC124\uD559\uBD80</th>\n        <th class=\"major\">\uAC1C\uC124\uC804\uACF5</th>\n        <th class=\"category\">\uACFC\uBAA9\uBD84\uB958</th>\n        <th class=\"title\">\uACFC\uBAA9\uBA85</th>\n        <th class=\"enTitle\">\uC601\uBB38 \uACFC\uBAA9\uBA85</th>\n        <th class=\"abeek\">\uACF5\uD559\uC778\uC99D</th>\n        <th class=\"point\">\uD559\uC810</th>\n        <th class=\"time\">\uC2DC\uAC04</th>\n        <th class=\"professor\">\uAD50\uC218\uBA85</th>\n        <th class=\"timetable\">\uAC15\uC758 \uC2DC\uAC04</th>\n        <th class=\"enLecture\">\uC601\uC5B4 \uAC15\uC758</th>\n        <th class=\"total\">\uC815\uC6D0</th>\n        <th class=\"leftSeat\">\uC5EC\uC11D</th>\n        <th class=\"add\">\uCD94\uAC00</th>\n      </tr>\n    </thead>\n    <tbody class=\"table-hover\">\n    <tr *ngFor=\"let lecture of lectures\">\n        <td class=\"code\">{{lecture.code}}</td>\n        <td class=\"department\">{{lecture.department}}</td>\n        <td class=\"major\">{{lecture.major}}</td>\n        <td class=\"category\">{{lecture.category}}</td>\n        <td class=\"title\">{{lecture.krTitle}}</td>\n        <td class=\"enTitle\">{{lecture.enTitle}}</td>\n        <td class=\"abeek\">{{lecture.abeek}}</td>\n        <td class=\"point\">{{lecture.point}}</td>\n        <td class=\"time\">{{lecture.time}}</td>\n        <td class=\"professor\">{{lecture.professor}}</td>\n        <td class=\"timetable\">{{lecture.timetable}}</td>\n        <td class=\"enLecture\">{{lecture.enLecture}}</td>\n        <td class=\"total\">{{lecture.total}}</td>\n        <td class=\"leftSeat\"></td>\n        <td class=\"add\"></td>\n    </tr>\n    </tbody>\n    </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], ListComponent);
    return ListComponent;
}());
exports.ListComponent = ListComponent;
//# sourceMappingURL=class-list.component.js.map