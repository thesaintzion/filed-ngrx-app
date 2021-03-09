import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';
import { PaymentService } from 'src/app/services/payment.service';
import { SharedService } from 'src/app/services/shared.service';
import { ADD_USER_DETAILS } from 'src/app/state/user/user.actions';

import {  takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-get-started-home',
  templateUrl: './get-started-home.component.html',
  styleUrls: ['./get-started-home.component.scss']
})
export class GetStartedHomeComponent implements OnInit, OnDestroy {
  successful: boolean = false;
  newUserDetails : UserDetails;
  submitted: boolean = false;
  userDetailsForm: FormGroup;
  loading: boolean = false;
  success: boolean = false;
  makePaymentUnsubscribe: Subscription;
  countries = [
    {
      name: 'UK',
      callingCode: '+44',
    },
    {
      name: 'Nigeria',
      callingCode: '+234',
    },
    {
      name: 'USA',
      callingCode: '+1',
    }
  ];

  destroy$: Subject<boolean> = new Subject<boolean>();

 

  constructor(private store : Store<{  userDetails : {  userDetails: UserDetails} }>, private formBuilder: FormBuilder, 
    private sharedService: SharedService, private paymentService: PaymentService) {
    this.createUserDetailsForm();
   }

  //  Create the user details form controls
  createUserDetailsForm(){
    this.userDetailsForm = this.formBuilder.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required]], 
      monthly_advert_budget: ['', [Validators.required]], 
      phone: this.phoneGroup(), 
    })
  }


  // Nested values for phone 
  phoneGroup(): FormGroup {
    return this.formBuilder.group({
      callingCode:  ['', [Validators.required]], 
      number:  ['', [Validators.required]], 
    })
  }


// Getter for user details form
  get userDetailsControls(){return this.userDetailsForm.controls};
 

  // Handles user form submit
  addUserDetails(){
    this.submitted = true;
    this.loading = true;
  if(this.userDetailsForm.invalid){
    this.sharedService.openSnackBar('Please fill in  the form', 'Ok', 3000, 'bg-danger')
  }else{

      //  The data to be sent to the server..
      this.newUserDetails = {
        first_name: this.userDetailsForm.value.first_name,
        last_name: this.userDetailsForm.value.last_name,
        email: this.userDetailsForm.value.email,
        monthly_advert_budget: this.userDetailsForm.value.monthly_advert_budget,
        phone: {
            callingCode:  this.userDetailsForm.value.phone.callingCode,
            number: this.userDetailsForm.value.phone.number
        }
      }

      // Dispatch to store
      this.dispatchUserDetails(this.newUserDetails);

  
    // Call the payment service api with some rxjs stuffs
    this.paymentService.makePayment(this.newUserDetails).pipe(takeUntil(this.destroy$)).subscribe( 
      res => {
        console.log('The response', res);
      setTimeout( () => {
        this.submitted = false;
        this.loading = false;      
        this.success = true;
        this.sharedService.openSnackBar('Your request was successful!!', 'Ok', 3000, 'bg-success')
      }, 3000);
      
      },
      err => {
        console.log('Érror posting user', err);
        setTimeout( () => {
          this.submitted = false;
          this.loading = false;  
          this.success = false;    
          this.sharedService.openSnackBar('Oops..!! Something went wrong, please try again later', 'Ok', 4000, 'bg-danger')
        }, 3000);
        
      });     
}
  
}


// handle  dispatch user details
dispatchUserDetails(userDetails){
  this.store.dispatch(ADD_USER_DETAILS({userDetails: userDetails}));
}


  ngOnInit(): void { }

  ngOnDestroy(){

    this.destroy$.next(true);
    // Unsubscribe from the subject
    this.destroy$.unsubscribe();
  }

}
