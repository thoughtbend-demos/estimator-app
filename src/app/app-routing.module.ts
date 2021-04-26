import { NgModule } from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';
import {WelcomeComponent} from './home/welcome/welcome.component';

const ROUTES: Route[] = [
  {
    path: 'welcome', component: WelcomeComponent
  },
  {
    path: 'estimate',
    data: { preload: true },
    loadChildren: () =>
      import('./estimate/estimate.module').then(m => m.EstimateModule)
  },
  {
    path: 'client',
    // canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: '', redirectTo: 'welcome', pathMatch: 'full'
  }
  /*{ path: '**', component: PageNotFoundComponent }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      ROUTES,
      {
        enableTracing: true,
        preloadingStrategy: PreloadAllModules
      }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
