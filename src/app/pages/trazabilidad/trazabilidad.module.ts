import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TrazabilidadPage } from './trazabilidad.page';

const routes: Routes = [
  {
    path: '',
    component: TrazabilidadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TrazabilidadPage]
})
export class TrazabilidadPageModule {}
