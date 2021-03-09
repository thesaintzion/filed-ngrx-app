import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./components/landing-page/landing-page.module').then(m => m.LandingPageModule)
  },

  {
    path: 'get-started',
    loadChildren: () => import('./components/get-started/get-started.module').then(m => m.GetStartedModule)
  },

   
  { path: '404',  component: PageNotFoundComponent},

  { path: '**', redirectTo: '/404', pathMatch: 'full'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
