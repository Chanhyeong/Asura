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
       // this.cartService.getCart().then();
    }
<<<<<<< HEAD:public/javascripts/app/table.component.ts

=======
>>>>>>> e2802329f1941c81e40cec4759a92a4c707214a6:public/javascripts/app/class.info.component.ts
}