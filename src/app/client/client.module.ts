import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route, RouterModule} from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: ClientListComponent
  }
];

@NgModule({
  declarations: [
    ClientListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class ClientModule { }
