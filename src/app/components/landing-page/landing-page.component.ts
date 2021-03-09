import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { UserDetails } from 'src/app/models/UserDetails';
import { decrement, increment, reset } from 'src/app/state/counter/counter.actions';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit, OnDestroy {

count: number;
userDetails: UserDetails;
userDetailsSubscription: Subscription;

  constructor(private store : Store<{ counter : { count: number}, userDetails : { userDetails: UserDetails} }>) { }


  ngOnInit(): void {

   this.userDetailsSubscription = this.store.select('userDetails').subscribe(data => {
      this.userDetails = data.userDetails;
    })

    console.log('See user ooo', this.userDetails);
  }

  

  ngOnDestroy(){
    if(this.userDetailsSubscription){
      this.userDetailsSubscription.unsubscribe();
    }

  }

}
