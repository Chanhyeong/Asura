import { Component,OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'
import { Cart } from './cart'
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'asura-app',
    templateUrl : 'public/javascripts/app/timetable.html',
    providers: [ CartService ]

})

export class AppComponent implements OnInit {
    constructor (private cartService: CartService){}
    lectures : Lecture[];
    cart : Lecture[] = [];
    DBinfo : Cart;
    day = {월 : 0,화: 1,수:2, 목:3, 금:4};
    table = new Array(36);
    ngOnInit(): void {
            this.getLecture();
            this.getCart();
        for(var i=0; i<36 ; i++){
            this.table[i] = new Array(6).fill("#FFFFFF");
        }
    }
    private getLecture(): void{
        this.cartService.getLectures()
            .then(lectures => this.lectures = lectures);
    }
    private getCart() : void{
        this.cartService.getCart()
            .subscribe(
                DBinfo => this.DBinfo = DBinfo,err=>console.log(err),
                () => {
                    var _cart = Object.values(this.DBinfo);
                    for(var i = 0 ; i<_cart[2].length ; i++)console.log(_cart[2][i]);
                }
            )

    }
    private addToCart(lecture : Lecture) : void {

        if (confirm('책가방에 추가 하시겠습니까?')) {
            if (this.cart.indexOf(lecture) == -1) {
                var string = lecture.timetable;
                var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
                var result = string.match(reg);
                if(result.length == 0){
                    this.cart.push(lecture); return ;
                }
                var _color = this.getRandomColor();
                var slice = this.calculateTime(result);

                for (var w = 0; w < 2; w++) {
                    for (var i = 0; i < slice.length; i++) {
                        var y = this.day[slice[i].y];
                        for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                            if (this.table[x][y] != "#FFFFFF") {
                                alert("시간이 중복되었습니다.");
                                return;
                            }
                            if (w == 1) {
                                this.table[x][y] = _color;
                                console.log(x+','+y+','+this.table[x][y]);
                            }
                        }
                    }
                }

                var index = this.cart.indexOf(lecture);
                this.cart.push(lecture);
            }
            else{

                alert("이미 책가방에 추가한 강의 입니다.");
            }
        }
    }

    private deleteCart(lecture : Lecture) : void{
        if (confirm('책가방에서 삭제 하시겠습니까?')) {
            var string = lecture.timetable;
            var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
            var result = string.match(reg);

            var slice = this.calculateTime(result);
            for (var i = 0; i < slice.length; i++) {
                var y = this.day[slice[i].y];
                for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                    this.table[x][y] = "#FFFFFF";
                }
            }
            var index = this.cart.indexOf(lecture);
            this.cart.splice(index, 1);
        }
    }

    // result(lecture){
    //     return _.map(_.uniqBy(lecture, "major"))
    // }

    queryTitle: string;
    byMajor: string;
    startDate: string;
    startTime: string;
    endDate: string;
    endTime: string;

    private calculateTime(info) {
        var stack= new Array();
        for (var index = 0; index < info.length; index++) {
            var string = info[index];
            var x1,x2,y = string[0];
            var reg = /\w+/g;
            var result = string.match(reg);

            if(result.length == 1){ // 0~15 or A~J
                if ('A'.charCodeAt((0)) <= result[0].charCodeAt(0)
                    && result[0].charCodeAt((0)) <= 'Z'.charCodeAt((0))) {
                    x1 = 3*(result[0].charCodeAt(0)-'A'.charCodeAt(0))+2;
                    stack.push({x1 : x1 , x2 : x1+2, y:y});
                }
                else{
                    x1 = parseInt(result[0])*2;
                    stack.push({x1 : x1, x2 : x1+1, y: y});
                }
            }
            else if(result.length == 2){ // float
                x1 = parseFloat(result[0])*2;
                stack.push({x1 : x1, x2 : x1+1, y: y});
            }
            else{
                console.log(result);
                x1 = (parseInt(result[0])-8)*2;
                if(result[1][0] == '3')x1++;
                x2 = (parseInt(result[2])-8)*2;
                if(result[3][0] == '3')x2++;
                stack.push({x1 : x1, x2 : x1+1, y: y});
            }
        }
        return stack;
    }
    private getRandomColor() : string {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
}


