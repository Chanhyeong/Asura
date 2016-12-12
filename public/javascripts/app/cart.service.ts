import { Injectable } from '@angular/core';
import { Lecture } from './lecture'
import { Cart } from './cart'
import { Headers, Http,Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {

    private CartUrl: string = '../cart'; // URL to Web API
    private headers: Headers = new Headers({'Content-Type': 'application/json'});
    constructor(private http: Http) {}


     public getLectures(): Observable<Lecture[]> {
     return this.http.get('../public/lecture-data.json')
         .cache().map((res:Response) =><Lecture[]>res.json())
     }

    public getCart() : Observable<Cart>{
        return this.http.get(this.CartUrl)
            .map((res: Response) => <Cart>res.json())
            .catch(this.handleError);
    }

    public saveCart(cart : Cart) : Observable<Cart>{
        return this.http.put(`${this.CartUrl}/${cart['email']}`,JSON.stringify(cart), {headers: this.headers})
            .map((res:Response) => <Cart>res.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}