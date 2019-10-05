import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.page.html',
  styleUrls: ['./pedido.page.scss'],
})
export class PedidoPage implements OnInit {

  constructor( private ser: ConexionService ) {
    this.ser.ListPedidos();
  }

  ngOnInit() {
  }

}
