import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-trazabilidad',
  templateUrl: './trazabilidad.page.html',
  styleUrls: ['./trazabilidad.page.scss'],
})
export class TrazabilidadPage implements OnInit {

  constructor(private ser: ConexionService) {
    this.ser.ListTrazabilidad();
   }

  ngOnInit() {
  }

}
