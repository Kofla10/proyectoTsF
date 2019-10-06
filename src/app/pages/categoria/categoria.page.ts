import { Component, OnInit } from '@angular/core';

// para realizar los formularios
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

// para obtener los campos del formulario
import { Categoria } from '../../model/categoria';

// import firestore
import { AngularFirestore } from '@angular/fire/firestore';

// importamos el servicio
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.page.html',
  styleUrls: ['./categoria.page.scss'],
})
export class CategoriaPage implements OnInit {

  formCategoria: FormGroup;
  categoria = new Categoria();

  // serv nombre que le damos al servicio
  constructor(
    private formbuilder: FormBuilder,
    private serv: ConexionService,
    private fire: AngularFirestore
  ) {

    this.serv.listaCategoria();
  }

  ngOnInit() {
    this.initCategoria();
    // this.addcategoria();
  }

  initCategoria() {
    this.formCategoria = this.formbuilder.group({
      // 'idCategoria': [this.categoria.idCategoria, [Validators.required]],
      'descripcion': [this.categoria.descripcion, [Validators.required]],
      'nombreCategoria': [this.categoria.nombreCategoria, [Validators.required]]
    });
  }

  // metodo para agregar una categoria a la coleccion de firebase
  addcategoria() {
    // validamos que el formulario sea valido
    if (this.formCategoria.invalid) {
      console.log('Formulario es invalido');
    } else {
      this.fire.collection('categoria').add(this.formCategoria.value).then(ref => {
        console.log('El id agregado es: ', ref.id);
      });
    }
  }

}
