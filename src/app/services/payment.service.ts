import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { UserDetails } from '../models/UserDetails';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly  postUrl = 'https://jsonplaceholder.typicode.com/users';
  result: UserDetails;

  constructor(private http: HttpClient) { }

// Check the type of error so that we can show the  right message..
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown errorRR!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `ErrorRR: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error CodeEE: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError('Something bad happened; please try again later.');
  }



  makePayment(userDetails: any){
    return this.http.post<any>(`${this.postUrl}`, userDetails).pipe(retry(3), catchError(this.handleError)) // Return the error after retrying 3 times
  }


  makePayment3(userDetails: UserDetails): Observable<any>{
    return this.http.post<any>(`${this.postUrl}`, userDetails).pipe(
      map( response => {
         return this.result = response;
      })
    )
  }
  
}



// Rxjs
// unsubscribe from RxJS Observables 
// handle HTTP errors using the throwError() and catchError() operators
//  unsubscribe from RxJS Observables returned from HttpClient methods using the takeUntil() operator when requests are 
// Handle error glo bally with interceptors


