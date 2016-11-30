import { Component,OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'

@Component({
    selector: 'asura-app',
    templateUrl : 'public/javascripts/app/timetable.html',
    providers: [ CartService ]

})
export class AppComponent implements OnInit {
    constructor (private cartService: CartService){}
    lectures : Lecture[];
    carts : Lecture[];
    ngOnInit(): void {
        this.getCart();
    }
    getCart(): void{
        this.cartService.getLectures()
            .then(lectures => this.lectures = lectures);
    }
    addToCart(lecture : Lecture){
        console.log(lecture);
        this.carts.push(lecture);
    }
}


