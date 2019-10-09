import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service'; // importamos el servicio

@Component({
  selector: 'app-view-producto-cliente',
  templateUrl: './view-producto-cliente.page.html',
  styleUrls: ['./view-producto-cliente.page.scss'],
})
export class ViewProductoClientePage implements OnInit {

  constructor(private servicio: ConexionService) {
    this.servicio.ListProductos();
  }

  ngOnInit() {
  }

}
