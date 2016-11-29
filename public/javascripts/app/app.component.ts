import { Component,OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'

@Component({
    selector: 'asura-app',
    template: `
    <ul>
        <li *ngFor="let cart of carts">
          {{cart.professor}}
        </li> 
    </ul>
    <plan></plan>
    <cart></cart>   
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


