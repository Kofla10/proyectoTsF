import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'; // para realizar el formulario reactivo
import { Promocion } from '../../model/promocion';  // importamos la clase modelo
import { ConexionService } from '../../services/conexion.service'; // importamos el servicio
import { AngularFirestore } from '@angular/fire/firestore'; // importamos fireStore para almacenar los datos

@Component({
  selector: 'app-promocion',
  templateUrl: './promocion.page.html',
  styleUrls: ['./promocion.page.scss'],
})
export class PromocionPage implements OnInit {

  formPromocion: FormGroup;
  promocion = new Promocion();

  constructor(
    private formbuilder: FormBuilder,
    private ser: ConexionService,
    private fire: AngularFirestore
  ) {
    this.ser.ListPromocion();
  }

  ngOnInit() {
    this.initPromocion();
  }

  initPromocion() {
    this.formPromocion = this.formbuilder.group({
      // 'idPromocion': [this.promocion.idCategoria, [Validators.required]],
      'fechaInicio': [this.promocion.fechaInicio, [Validators.required]],
      'fechaFinal': [this.promocion.fechaFinal, [Validators.required]],
      'nombreProducto': [this.promocion.nomberProducto, [Validators.required]],
      'precioPromocion': [this.promocion.precioPromocion, [Validators.required]],
      'precioNormal': [this.promocion.precioNormal, [Validators.required]],
      'idCategoria': [this.promocion.categoria, [Validators.required]],
      'idUsuario': [this.promocion.usuario, [Validators.required]],
      'idProducto': [this.promocion.idProducto, [Validators.required]]
    });
  }

  addPromocion() {
    // realizamos la validacion de los datos del formulario
    if (this.formPromocion.invalid) {
      console.log('Error en el formulario');
    } else {
      this.fire.collection('promocion').add(this.formPromocion.value).then(ref => {
        console.log('El id agregado es: ', ref.id);
      });
    }
  }

}
