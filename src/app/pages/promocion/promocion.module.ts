import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Routes,
  RouterModule
} from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PromocionPage } from './promocion.page';

const routes: Routes = [
  {
    path: '',
    component: PromocionPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [PromocionPage]
})
export class PromocionPageModule { }
