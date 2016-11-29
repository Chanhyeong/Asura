import { Component,OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'

@Component({
    selector: 'asura-app',
    template: `
<div id="timetable_work_space">
    <plan></plan>
    <cart></cart>
    </div>
    <class-info></class-info>
    `,
    providers: [ CartService ]

})
export class AppComponent implements OnInit {
    constructor (private cartService: CartService){}
    carts : Lecture[];
    ngOnInit(): void {
        this.getCart();
    }
    getCart(): void{
        this.cartService.getCart().then(carts => this.carts = carts);
    }
}


