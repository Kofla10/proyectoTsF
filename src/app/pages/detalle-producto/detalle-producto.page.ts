import { Component, OnInit } from '@angular/core';
// para realizar los formulario
import {
  Validators,
  FormGroup,
  FormBuilder
} from '@angular/forms';
// importamos la interface para obtener los campos del formulario
import { DetalleProducto } from '../../interfaces/detalle-producto';



@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.page.html',
  styleUrls: ['./detalle-producto.page.scss'],
})
export class DetalleProductoPage implements OnInit {

  form: FormGroup;
  detalle = new DetalleProducto();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() { }

  initDetalle() {
    this.form = this.formbuilder.group({
      'idDetalle': [this.detalle.idDetalle, [Validators.required]],
      'descripcion': [this.detalle.descripcion, [Validators.required]],
      'fechapublicacion': [this.detalle.fechaPublicacion, [Validators.required]]
    });
  }
}
