import { Injectable } from '@angular/core';
import { Lecture } from './lecture'
import { LECTURES } from './lecture-data'
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

    public getLectures(): Promise<Lecture[]> {
        return Promise.resolve(LECTURES);
    }


    public getCart() : Observable<Cart>{
        return this.http.get(this.CartUrl)
            .map((res: Response) => <Cart>res.json())
            .catch(this.handleError);
    }

    public saveCart(cart : Cart) {
        return this.http
            .put(this.CartUrl, JSON.stringify(cart), {headers: this.headers})
            .toPromise()
            .then(() => cart)
            .catch(this.handleError);
    }
    /*
    public handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
    */
    private handleError(error: Response){
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}