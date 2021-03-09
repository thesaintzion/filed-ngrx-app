import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserDetails } from '../models/UserDetails';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private readonly  postUrl = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

// Make Payment function
  makePayment(userDetails: any){
    return this.http.post<any>(`${this.postUrl}`, userDetails);
  }
  
}




