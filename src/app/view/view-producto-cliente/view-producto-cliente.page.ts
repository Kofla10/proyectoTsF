import { Component, OnInit } from '@angular/core';
import { ConexionService } from '../../services/conexion.service'; // importamos el servicio
import { Producto } from '../../model/producto';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-producto-cliente',
  templateUrl: './view-producto-cliente.page.html',
  //  styleUrls: ['./view-producto-cliente.page.css'], // agregamos el css
  styleUrls: ['./view-producto-cliente.page.scss'],
})
export class ViewProductoClientePage implements OnInit {
  producto: Producto[] = [];

  productoColeccion: AngularFirestoreCollection<Producto>;
  productolist: Observable<Producto[]>;


  // constructor(private servicio: ConexionService) {
  //   this.servicio.ListProductos();
  //   // .subscribe((resp: any) => {
  //   //   this.producto = resp;
  //   // });
  //   this.servicio.listadoProductos();
  // }

  constructor(private fire: AngularFirestore) {
  }
  ngOnInit() {
    this.ListProductos();
  }

  ListProductos() {
    this.fire.collection('producto').valueChanges().subscribe((data: any) => {
      this.productolist = data;
      console.log('Lista Productos', this.productolist);
    });
  }

}
