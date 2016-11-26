import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
    selector: 'cart',
    templateUrl: 'public/javascripts/app/cart.component.html',
    providers: [ CartService ]


})
export class CartComponent {

    constructor (private cartService: CartService){}

    getCart(): void{
        this.cartService.getCart().then();
    }
}


