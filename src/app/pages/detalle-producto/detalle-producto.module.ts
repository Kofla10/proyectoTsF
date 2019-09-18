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

import { DetalleProductoPage } from './detalle-producto.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleProductoPage
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
  declarations: [DetalleProductoPage]
})
export class DetalleProductoPageModule { }
