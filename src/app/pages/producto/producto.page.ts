import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface de producto
import { Producto } from '../../model/producto';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  form: FormGroup;
  producto = new Producto();

  constructor(private formbuilder: FormBuilder, private ser: ConexionService) {
    this.ser.ListProductos();
  }

  ngOnInit() {
    this.initProducto();
  }

  initProducto() {
    this.form = this.formbuilder.group({
      // 'idProducto': [this.producto.idProducto, [Validators.required]],
      'nombre': [this.producto.nombre, [Validators.required]],
      'precioProducto': [this.producto.precioProducto, [Validators.required]],
      'idCategoria': [this.producto.categoria, [Validators.required]],
      'idMarketing': [this.producto.marketing, [Validators.required]],
      'descripcion': [this.producto.descripcion, [Validators.required]],
      'fechaPublicacion': [this.producto.fechaPublicacion, [Validators.required]]
    });
  }
}
