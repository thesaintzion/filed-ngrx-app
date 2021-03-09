import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './_shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';


import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter/counter.reducer';
import { userReducer } from './state/user/user.reducer';
// import { userReducer } from './state/user.reducer';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ userDetails: userReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
