import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({
    selector: 'plan',
    templateUrl: 'public/javascripts/app/plan.component.html',
    providers: [ CartService ]
})
export class PlanComponent {

    private grid = [1,2,3];
    private gridWidth = new Array(6);
    private gridHeight = new Array(32);
    private interval = 2000;

    constructor (private cartService: CartService){}

    getCart(): void{
        this.cartService.getCart().then();
    }
}


