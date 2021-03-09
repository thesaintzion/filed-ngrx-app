import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { LandingPageComponent } from './landing-page.component';
import { SharedModule } from 'src/app/_shared/shared.module';

@NgModule({
  declarations: [LandingPageComponent],
  imports: [
    SharedModule,
    CommonModule,
    LandingPageRoutingModule,
  ]
})
export class LandingPageModule { }
