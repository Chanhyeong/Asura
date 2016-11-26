import { Injectable } from '@angular/core';
import { Lecture } from './lecture'

@Injectable()
export class CartService {

    getCart(): void{


        /*이 부분을 ajax를 이용해서 data를 요청할 것
         node에서는 RSET API로 data를 뿌려주도록 한다

         back-end server에서 cart data를 가져오므로
         Asynchronus하게 작동하도록 Promise return 방식을 사용해야한다.
        */
    }
}