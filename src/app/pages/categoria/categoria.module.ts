import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// se importa reactiveFormsModule para realizar formularios reactivos
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  Routes,
  RouterModule
} from '@angular/router';


import { IonicModule } from '@ionic/angular';

import { CategoriaPage } from './categoria.page';

const routes: Routes = [
  {
    path: '',
    component: CategoriaPage
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
  declarations: [CategoriaPage]
})
export class CategoriaPageModule { }
