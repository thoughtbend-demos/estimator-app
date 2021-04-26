import { NgModule } from '@angular/core';
import {PreloadAllModules, Route, RouterModule} from '@angular/router';

const ROUTES: Route[] = [
  { path: 'client',
    // canActivate: [AuthGuard],
    data: { preload: true },
    loadChildren: () =>
      import('./client/client.module').then(m => m.ClientModule)
  },
  {
    path: 'estimate',
    data: { preload: true },
    loadChildren: () =>
      import('./estimate/estimate.module').then(m => m.EstimateModule)
  },
  { path: '', redirectTo: 'client', pathMatch: 'full' },
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
