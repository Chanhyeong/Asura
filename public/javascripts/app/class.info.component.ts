import { Component } from '@angular/core';
import { CartService } from './cart.service';

@Component({
        selector: 'class-info',
        templateUrl: 'public/javascripts/app/class.info.component.html',
        providers: [ CartService ]
})

export class ClassInfoComponent {
    constructor (private cartService: CartService){}
    getCart(): void{
        this.cartService.getCart().then();
    }
}