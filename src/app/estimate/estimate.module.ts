import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstimateListComponent } from './estimate-list/estimate-list.component';
import { Route, RouterModule } from '@angular/router';

const ROUTES: Route[] = [
  {
    path: '',
    component: EstimateListComponent
  }
];

@NgModule({
  declarations: [
    EstimateListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ]
})
export class EstimateModule { }
