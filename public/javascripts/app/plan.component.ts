import { Component } from '@angular/core';
import { CartService } from './cart.service';
@Component({
    selector: 'plan',
    templateUrl: 'public/javascripts/app/plan.component.html'
    providers: [ CartService ]
})
export class PlanComponent {

    constructor (private cartService: CartService){}
    getCart(): void{
        this.cartService.getCart().then();
    }
}
}


