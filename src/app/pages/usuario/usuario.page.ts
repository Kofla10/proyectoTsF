import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// inportamos la interface
import { Usuario } from '../../model/usuario';
import { ConexionService } from '../../services/conexion.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.page.html',
  styleUrls: ['./usuario.page.scss'],
})
export class UsuarioPage implements OnInit {

  form: FormGroup;
  usuario = new Usuario();
  tipoUsuario: any[];
  tipoLocals: any[];

  constructor(private formBuilder: FormBuilder, private ser: ConexionService) {
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
    this.form = this.formBuilder.group({
      // 'idUsuario': [this.usuario.idUsuario, [Validators.required]],
      'nombres': [this.usuario.nombres, [Validators.required]],
      // 'SegundoNombre': [this.usuario.nombres, [Validators.required]],
      'apellidos': [this.usuario.apellidos, [Validators.required]],
      'rol': [this.usuario.rol, [Validators.required]],
      'edad': [this.usuario.edad, [Validators.required]],
      'fechaNacimiento': [this.usuario.fechaNacimiento, [Validators.required]],
      'correo': [this.usuario.correo, [Validators.required]],
      'direccion': [this.usuario.direccion, [Validators.required]],
      'apodo': [this.usuario.apodo, [Validators.required]],
      'telefono': [this.usuario.telefono, [Validators.required]],
      'celular': [this.usuario.celular, [Validators.required]],
      'tipoNegocio': [this.usuario.tipoNegocio, [Validators.required]],
      'contrasenia': [this.usuario.contrasenia, [Validators.required]]
    });
  }

}
