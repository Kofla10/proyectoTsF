import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewCardPromocionesPage } from './view-card-promociones.page';

const routes: Routes = [
  {
    path: '',
    component: ViewCardPromocionesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewCardPromocionesPage]
})
export class ViewCardPromocionesPageModule {}
