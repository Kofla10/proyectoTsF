import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms'; // se realizan las importacion para realizar el formulario reactivo
import { Usuario } from '../../model/usuario'; // inportamos la clase modelo
import { ConexionService } from '../../services/conexion.service'; // importamo el servicio
import { AngularFirestore } from '@angular/fire/firestore'; // importamos fireStore para agregar a un usuario

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  formUsuario: FormGroup;
  usuario = new Usuario();
  tipoUsuario: any[];
  tipoLocals: any[];

  constructor(
    private formBuilder: FormBuilder,
    private ser: ConexionService,
    private fire: AngularFirestore) {
    this.ser.ListUsuario();


    this.tipoUsuario = [
      { id: 'admin', name: 'Administrador' },
      { id: 'clie', name: 'Cliente' },
      { id: 'propietario', name: 'Propietario' }
    ];

    this.tipoLocals = [
      { id: 'super', name: 'Super Mercado' },
      { id: 'ropa', name: 'Almacen de Ropa' },
      { id: '', name: '' },
      { id: '', name: '' },
      { id: '', name: '' },
      { id: '', name: '' },
      { id: '', name: '' }
    ];
  }

  ngOnInit() {
    this.initUsuario();
  }

  initUsuario() {
    this.formUsuario = this.formBuilder.group({
      // 'idUsuario': [this.usuario.idUsuario, [Validators.required]],
      'nombres': [this.usuario.nombres, [Validators.required]],
      // 'SegundoNombre': [this.usuario.nombres, [Validators.required]],
      'apellidos': [this.usuario.apellidos, [Validators.required]],
      // no se pone requerido para la prueba por si me olvido de poner el requerido
      // 'rol': [this.usuario.rol, [Validators.required]],
      'rol': [this.usuario.rol],
      'edad': [this.usuario.edad, [Validators.required]],
      // 'fechaNacimiento': [this.usuario.fechaNacimiento, [Validators.required]],
      'correo': [this.usuario.correo, [Validators.required]],
      'direccion': [this.usuario.direccion, [Validators.required]],
      // 'apodo': [this.usuario.apodo, [Validators.required]],
      'telefono': [this.usuario.telefono, [Validators.required]],
      'celular': [this.usuario.celular, [Validators.required]],
      // 'tipoNegocio': [this.usuario.tipoNegocio, [Validators.required]],
      'tipoNegocio': [this.usuario.tipoNegocio], // poner el requerido
      'contrasenia': [this.usuario.contrasenia, [Validators.required]]
    });
  }

  // agregamos un usuario
  addUsuario() {
    // realizamos la validacion del formulario
    if (this.formUsuario.invalid) {
      console.log('Error en el formulario');
    } else {
      this.fire.collection('usuario').add(this.formUsuario.value).then(ref => {
        console.log('El id agregafo es: ', ref.id);
      });
    }
  }

}
