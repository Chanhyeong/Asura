/**
 * Created by chanhyeong on 2016-11-17.
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core'
import { Circle } from './circle'
import { CircleService } from "./circle.service";

@Component({
    selector: 'intersect',
    providers: [ CircleService ],
    template: `
<div *ngIf = "c1 && c2 && change">
<p>c1 ∩ c2 : {{circleService.isIntersect(c1, c2)}}</p>
</div>
`
})

export class CircleIntersectComponent{
    @Input() c1: Circle;
    @Input() c2: Circle;
    @Input() change: Boolean;
    circleService: CircleService;
    constructor(circleService: CircleService){
        this.circleService = circleService;
    }
}