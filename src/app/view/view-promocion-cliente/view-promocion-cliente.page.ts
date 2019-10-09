import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service'; // importamos el servicio
@Component({
  selector: 'app-view-promocion-cliente',
  templateUrl: './view-promocion-cliente.page.html',
  styleUrls: ['./view-promocion-cliente.page.scss'],
})
export class ViewPromocionClientePage implements OnInit {

  constructor(private service: ConexionService) {
    this.service.ListPromocion();
  }

  ngOnInit() {
  }

}
