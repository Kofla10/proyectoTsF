import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewProductoClientePage } from './view-producto-cliente.page';

const routes: Routes = [
  {
    path: '',
    component: ViewProductoClientePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewProductoClientePage]
})
export class ViewProductoClientePageModule {}
