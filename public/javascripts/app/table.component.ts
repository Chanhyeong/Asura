/**
 * Created by chanhyeong on 2016-11-21.
 */
import { Component } from '@angular/core';
import { Lecture } from './lecture'
import { LECTURES } from './lecture-data'

@Component({
        selector: 'class-info',
        templateUrl: 'public/javascripts/app/table.component.html',
})

export class TableComponent {
    lectures=LECTURES;
}