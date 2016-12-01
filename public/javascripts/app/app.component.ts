import { Component,OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'

@Component({
    selector: 'asura-app',
    templateUrl : 'public/javascripts/app/timetable2.html',
    providers: [ CartService ]

})
export class AppComponent implements OnInit {
    constructor (private cartService: CartService){}
    lectures : Lecture[];
    cart : Lecture[] = [];
    sel : Lecture;
    ngOnInit(): void {
        this.getCart();
    }
    getCart(): void{
        this.cartService.getLectures()
            .then(lectures => this.lectures = lectures);
    }

    addToCart(lecture : Lecture){
        if(this.cart.indexOf(lecture) == -1){
            this.cart.push(lecture);
        }
    }
    deleteCart(lecture : Lecture){
        if (confirm('책가방에서 삭제 하시겠습니까?')) {
            var index = this.cart.indexOf(lecture);
            this.cart.splice(index, 1);
        }
    }


}


