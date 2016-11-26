import { Component } from '@angular/core';
import { Lecture } from './lecture'
import { LECTURES } from './lecture-data'
import { CartService } from './cart.service';

@Component({
        selector: 'class-info',
        templateUrl: 'public/javascripts/app/table.component.html',
        providers: [ CartService ]
})

export class TableComponent {
    lectures = LECTURES;

    constructor (private cartService: CartService){}
    getCart(): void{
        this.cartService.getCart().then();
    }
}
}