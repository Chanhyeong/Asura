/**
 * Created by chanhyeong on 2016-11-03.
 */
import { Component } from '@angular/core';
import { Circle } from './circle'

@Component({
    selector: 'circle',
    template: `
<label>c1: ({{c1.x}}, {{c1.y}}, {{c1.r}})</label>
<input [(ngModel)] = "c1.x">
<input [(ngModel)] = "c1.y">
<input [(ngModel)] = "c1.r"> <br>

<label>c2: ({{c2.x}}, {{c2.y}}, {{c2.r}})</label>
<input [(ngModel)] = "c2.x">
<input [(ngModel)] = "c2.y">
<input [(ngModel)] = "c2.r"> <br>

<distance [change]="change()" [c1] = "c1" [c2] = "c2"></distance>
<intersect [change]="change()" [c1] = "c1" [c2] = "c2"></intersect>
`
})

export class AppComponent {
    c1: Circle = new Circle();
    c2: Circle = new Circle();
    change(): Boolean{
        if(this.c1.r != 0 && this.c2.r != 0){
            return true;
        }
        else{
            return false;
        }
    }
}