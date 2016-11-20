/**
 * Created by chanhyeong on 2016-11-17.
 */
import { Injectable } from '@angular/core';
import { Circle } from './circle'

@Injectable()
export class CircleService{
    calculateDistance(c1: Circle, c2: Circle): number{
        return Math.sqrt(Math.pow((c1.x - c2.x), 2) + Math.pow((c1.y - c2.y), 2))
    };
    isIntersect(c1: Circle, c2: Circle): Boolean{
        if (this.calculateDistance(c1, c2) > -(-c1.r - c2.r)) {
            return false;
        } else {
            return true;
        }
    };
}