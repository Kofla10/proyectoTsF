import { Component, OnInit } from '@angular/core';
// para realizar los formularios
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// para obtener los campos del formulario
import { Categoria } from '../../model/categoria';

// importamos el servicio
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  form: FormGroup;
  categoria = new Categoria();

  constructor(
    private formbuilder: FormBuilder,
    private ser: ConexionService
  ) {

    this.ser.listaCategoria();
  }

  ngOnInit() {
    this.initCategoria();
  }

  initCategoria() {
    this.form = this.formbuilder.group({
      // 'idCategoria': [this.categoria.idCategoria, [Validators.required]],
      'descripcion': [this.categoria.descripcion, [Validators.required]],
      'nombreCategoria': [this.categoria.nombreCategoria, [Validators.required]]
    });
  }

  // metodo para agregar una categoria a fire store
  addcategoria() {

  }


  //  // Add a new document with a generated id.
  // let addDoc = db.collection('cities').add({
  //   name: 'Tokyo',
  //   country: 'Japan'
  // }).then(ref => {
  //   console.log('Added document with ID: ', ref.id);
  // });

  // https://www.youtube.com/watch?v=aAssvBo7I1U


}
