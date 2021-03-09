import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GetStartedRoutingModule } from './get-started-routing.module';
import { GetStartedRootComponent } from './get-started-root/get-started-root.component';
import { GetStartedHomeComponent } from './get-started-home/get-started-home.component';
import { SharedModule } from 'src/app/_shared/shared.module';


@NgModule({
  declarations: [GetStartedRootComponent, GetStartedHomeComponent],
  imports: [
    CommonModule,
      SharedModule,
    GetStartedRoutingModule
  ]
})
export class GetStartedModule { }
