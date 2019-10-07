import { Component, OnInit } from '@angular/core';
// hacemos las importaciones para realizar el formulario reactivo
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
// importamos la interface de producto
import { Producto } from '../../model/producto';
// importamos el fireStore
import { AngularFirestore } from '@angular/fire/firestore';
// importamos el servicio
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  formProducto: FormGroup;
  producto = new Producto();

  constructor(
    private formbuilder: FormBuilder,
    private ser: ConexionService,
    private fire: AngularFirestore
  ) {
    this.ser.ListProductos();
  }

  ngOnInit() {
    this.initProducto();
  }

  initProducto() {
    this.formProducto = this.formbuilder.group({
      // 'idProducto': [this.producto.idProducto, [Validators.required]],
      'nombre': [this.producto.nombre, [Validators.required]],
      'precioProducto': [this.producto.precioProducto, [Validators.required]],
      'idCategoria': [this.producto.categoria, [Validators.required]],
      'idMarketing': [this.producto.marketing, [Validators.required]],
      'descripcion': [this.producto.descripcion, [Validators.required]],
      'fechaPublicacion': [this.producto.fechaPublicacion, [Validators.required]],
      'cantidad': [this.producto.cantidad, [Validators.required]]
    });
  }

  // para agreagar un producto a la coleccion de firebase
  addProducto() {
    // realizamos una validacion
    if (this.formProducto.invalid) {
      console.log('Error en el formulario');
    } else {
      this.fire.collection('producto').add(this.formProducto.value).then(ref => {
        console.log('El id agregado es: ', ref.id);
      });
    }
  }

}

