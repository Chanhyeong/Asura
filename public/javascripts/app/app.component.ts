import { Component,OnInit} from '@angular/core';
import { CartService } from './cart.service';
import { Lecture } from './lecture'
import { Cart } from './cart'
import * as _ from "lodash";


@Component({
    selector: 'asura-app',
    templateUrl : 'public/javascripts/app/timetable.html',
    providers: [ CartService ]
})

export class AppComponent implements OnInit {
    day = {월 : 0,화: 1,수:2, 목:3, 금:4};
    constructor (private cartService: CartService){}

    lectures : Lecture[];
    my_cart : [string[],string[],string[],string[],string[]] = [[],[],[],[],[]];
    view_cart : Lecture[] = [];
    DBinfo : Cart;
    table = new Array(36);
    now_index : number = 0;
    departList : Lecture[];
    majorList : Lecture[];
    queryTitle: string;
    selectedDepart: string = "개설학과";
    selectedMajor: string = "개설전공";
    selectedCategory: string = "교과구분(과목분류)";
    selectedDate: string = "요일";
    selectedTime: string = "시간";
    timeQuery: string = "";

    listNum = 5;

    onScrollDown(): void {
        this.listNum += 2;
    }

    setListNumInit(): void{
        this.listNum = 5;
    }

    ngOnInit(): void {
        this.getLecture(); // 모든 수강정보 가져옴
        for (var i = 0; i < 36; i++) {
            this.table[i] = new Array(6).fill("#FFFFFF");
        }
    }

    private getLecture(): void{
        this.cartService.getLectures()
            .subscribe(lectures => this.lectures = lectures,
                err=>console.log(err),
                ()=>{this.departList = _.uniqBy(this.lectures, 'department');
                    this.majorList = _.uniqBy(this.lectures, 'major'); this.getCart()});

    }

    private otherPlan(c : number) : void{
        for (var i = 0; i < 36; i++) {
            this.table[i] = new Array(6).fill("#FFFFFF");
        }
        this.now_index = c;
        var _cart = this.my_cart[c];
        this.view_cart =  [];
        for (var i = 0; i < _cart.length; i++) {
            var _index = this.lectures.findIndex(x => x.code == _cart[i]);
            this.timeSpread(this.lectures[_index]);
            this.view_cart.push(this.lectures[_index]);
        }
    }

    private getCart() : void{
        this.cartService.getCart()
            .subscribe(DBinfo => this.DBinfo = DBinfo,
                err=>console.log(err),
                () => {this.makeFromCart();})
    }

    private makeFromCart() : void {
        console.log("load.....");
        this.my_cart = Object.values(this.DBinfo.plan);
        var _color = this.getRandomColor();
        for (var i = 0; i < this.my_cart[0].length; i++) {
            var _index = this.lectures.findIndex(x => x.code == this.my_cart[0][i]);
            var lecture = this.lectures[_index];
            this.view_cart.push(this.lectures[_index]);
            var string = lecture.timetable;
            var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
            var result = string.match(reg);
            var slice = this.calculateTime(result);
            for (var j = 0; j < slice.length; j++) {
                var y = this.day[slice[j].y];
                this.timeSpread(lecture);
            }
        }
    };

    private timeSpread(lecture : Lecture) : void{
        var string = lecture.timetable;
        var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
        var result = string.match(reg);
        var slice = this.calculateTime(result);
        var _color = this.getRandomColor();
        for (var i = 0; i < slice.length; i++) {
            var y = this.day[slice[i].y];
            for(var x = slice[i].x1 ; x<=slice[i].x2 ; x++) {
                this.table[x][y] = _color;
                console.log(x+','+y+','+this.table[x][y]);
            }
        }

    }
    private saveCart() : void{
        for(var i=0 ; i<this.my_cart.length ; i++){
            this.DBinfo.plan[i] = [];
            for(var j=0 ; j<this.my_cart[i].length ; j++) {
                this.DBinfo.plan[i].push(this.my_cart[i][j]);
            }
        }

        this.cartService.saveCart(this.DBinfo)
            .subscribe(DBinfo => this.DBinfo = DBinfo,err=>console.log(err)
                ,()=>{this.makeFromCart() ; alert("저장이 완료 되었습니다!")});
    }
    private addToCart(lecture : Lecture, _c : number) : void {
        var flag : boolean = false;
        if(_c == 0)flag = confirm('책가방에 추가 하시겠습니까?');
        else flag = true;
        if (flag == true) {
            if (this.my_cart[this.now_index].indexOf(lecture.code) == -1 ) {
                for(var w = 0 ; w<this.view_cart.length ; w++){
                    if(this.view_cart[w].enTitle == lecture.enTitle){
                        alert("동일 과목 수강이 불가능 합니다.");return;
                    }
                }
                var string = lecture.timetable;
                var reg = /[월|화|수|목|금]{1}(\w|:|~|\.)+/g;
                var result = string.match(reg);
                if(result.length == 0){
                    this.my_cart[this.now_index].push(lecture.code); return ;
                }
                var _color = this.getRandomColor();
                var slice = this.calculateTime(result);

                for (var i = 0; i < slice.length; i++) {
                    var y = this.day[slice[i].y];
                    for (var x = slice[i].x1; x <= slice[i].x2; x++) {
                        if (this.table[x][y] != "#FFFFFF") {
                            alert("시간이 중복되었습니다.");return;
                        }
                    }
                }
                this.my_cart[this.now_index].push(lecture.code);
                this.view_cart.push(lecture);
                this.timeSpread(lecture);
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
            var index = this.my_cart[this.now_index].indexOf(lecture.code);
            this.my_cart[this.now_index].splice(index, 1);
            index = this.view_cart.indexOf(lecture);
            this.view_cart.splice(index, 1);
        }
    }

    private makeTimeQuery(): string{
        if((this.selectedDate === "요일") && (this.selectedTime === "시간"))
            return "";
        else if(this.selectedDate === "요일")
            return this.selectedTime;
        else if(this.selectedTime === "시간")
            return this.selectedDate;
        else
            return this.selectedDate + this.selectedTime;
    }

    private calculateTime(info) {
        var stack= new Array();
        for (var index = 0; index < info.length; index++) {
            var string = info[index];
            var x1,x2,y = string[0];
            var reg = /\w+/g;
            var result = string.match(reg);

            if(result.length == 1){ // 0~15 oor A~J
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


