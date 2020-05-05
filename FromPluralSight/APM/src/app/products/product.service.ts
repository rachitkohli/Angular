import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    private productUrl = 'api/products/products.json';

    constructor(private http: HttpClient) {}

    getProducts(): Observable<IProduct[]> {
      return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data=>console.log('All: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
    }

    getProduct(id: number): Observable<IProduct>{
      return this.getProducts()
        .pipe(map((products: IProduct[]) => products.find(p=>p.productId==id)));
    }

    private handleError(err: HttpErrorResponse) {
      let errorMessage = '';
      if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message}`;   //Client-side error
      } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`; //Server side error
      }
      console.error(errorMessage);
      return throwError(errorMessage);
    }
}