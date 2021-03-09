import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GetStartedHomeComponent } from './get-started-home/get-started-home.component';
import { GetStartedRootComponent } from './get-started-root/get-started-root.component';

const routes: Routes = [
   {path: '', component: GetStartedRootComponent, children: [
    {path: '', component: GetStartedHomeComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GetStartedRoutingModule { }
