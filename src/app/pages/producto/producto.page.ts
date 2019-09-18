import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface de producto
import { Producto } from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  form: FormGroup;
  producto: Producto;

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() { }


  initProducto() {
    this.form = this.formbuilder.group({
      'idProducto': [this.producto.idProducto, [Validators.required]],
      'nombre': [this.producto.nombre, [Validators.required]],
      'precioProducto': [this.producto.precioProducto, [Validators.required]],
      'idCategoria': [this.producto.idCategoria, [Validators.required]],
      'idMarketing': [this.producto.idMarketing, [Validators.required]],
      'descripcion': [this.producto.descripcion, [Validators.required]],
      'fechaPublicacion': [this.producto.fechaPublicacion, [Validators.required]]
    });
  }
}
