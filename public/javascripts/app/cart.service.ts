import { Injectable } from '@angular/core';
import { Lecture } from './lecture'
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CartService {

    private CartUrl: string = 'http://localhost:8080/profile/'; // URL to Web API
    constructor(private http: Http) {}
    getCart(): Promise<Lecture[]> {
        return this.http.get(this.CartUrl)
            .toPromise()
            .then(response => response.json().data as Lecture[])
            .catch(this.handleError);
    }
    handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}