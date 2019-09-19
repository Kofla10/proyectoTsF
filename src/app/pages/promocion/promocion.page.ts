import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface
import { Promocion } from '../../interfaces/promocion';

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {

  form: FormGroup;
  promocion = new Promocion();

  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.initPromocion();
  }

  initPromocion() {
    this.form = this.formbuilder.group({
      'idPromocion': [this.promocion.idCategoria, [Validators.required]],
      'fechaInicio': [this.promocion.fechaInicio, [Validators.required]],
      'fechaFinal': [this.promocion.fechaFinal, [Validators.required]],
      'nombreProducto': [this.promocion.nomberProducto, [Validators.required]],
      'precioPromocion': [this.promocion.precioPromocion, [Validators.required]],
      'precioNormal': [this.promocion.precioNormal, [Validators.required]],
      'idCategoria': [this.promocion.idCategoria, [Validators.required]],
      'idUsuario': [this.promocion.idUsuario, [Validators.required]],
      'idProducto': [this.promocion.idProducto, [Validators.required]]
    });
  }

}
