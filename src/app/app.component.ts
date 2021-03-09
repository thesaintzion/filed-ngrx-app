import { Component, OnDestroy, OnInit } from '@angular/core';
import { Event,
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  loading = true;
  routeSub: Subscription;

  constructor( public sharedService: SharedService, private router: Router) {
  this.routeSub = this.router.events.subscribe((event: Event) => {
      switch (true) {
        case event instanceof NavigationStart: {
          this.loading = true;
          break;
        }
        case event instanceof NavigationEnd:
        case event instanceof NavigationCancel:
        case event instanceof NavigationError: {
            this.loading = false;
          break;
        }
        default: {
          break;
        }
      }
    });
  }
    
  
   ngOnInit(): void {
  
  }

  ngOnDestroy(){
    // Always unsubscribe
    if(this.routeSub){
      this.routeSub.unsubscribe();
    }
  }

}


