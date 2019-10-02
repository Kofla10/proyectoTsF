import { Component, OnInit } from '@angular/core';
// para realizar los formularios
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// para obtener los campos del formulario
import { Categoria } from '../../interfaces/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  form: FormGroup;
  categoria = new Categoria();

  constructor(private formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.initCategoria();
  }

  initCategoria() {
    this.form = this.formbuilder.group({
      'idCategoria': [this.categoria.idCategoria, [Validators.required]],
      'descripcion': [this.categoria.descripcion, [Validators.required]],
      'nombreCategoria': [this.categoria.nombreCategoria, [Validators.required]]
    });
  }

}
