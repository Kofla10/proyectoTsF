import { Injectable } from '@angular/core';
// importamos agularfireDatabase y anguarList
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// modelos de datos
import { Trazabilidad } from '../model/trazabilidad';
import { Categoria } from '../model/categoria';
import { Marketing } from '../model/marketing';
import { Pedido } from '../model/pedido';
import { Producto } from '../model/producto';
import { Promocion } from '../model/promocion';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  categoria: Categoria[];


  // categoriaColeccion: AngularFirestoreCollection<Categoria>;
  categoriaColeccion: AngularFirestoreCollection<any[]>;
  categorialist: Observable<any[]>;
  marketinglist: Observable<any[]>;
  pedidoslist: Observable<any[]>;
  productolist: Observable<any[]>;
  promocionlist: Observable<any[]>;
  trazabilidadlist: Observable<any[]>;
  usuariolist: Observable<any[]>;

  constructor(private firebase: AngularFirestore) { }

  listaCategoria() {
    this.firebase.collection('categoria').valueChanges().subscribe(data => {
      console.log('categoria', data);
    });
  }
  addCategoria(categoria) {
    this.categoriaColeccion.add(categoria);
  }

  ListMarketing() {
    this.firebase.collection('marketing').valueChanges().subscribe(data => {
      console.log('marketing', data);
    });
  }

  ListPedidos() {
    this.firebase.collection('pedido').valueChanges().subscribe(data => {
      console.log('pedidos', data);
    });
  }

  ListProductos() {
    this.firebase.collection('producto').valueChanges().subscribe(data => {
      console.log('productos', data);
    });
  }

  ListPromocion() {
    this.firebase.collection('promocion').valueChanges().subscribe(data => {
      console.log('promocion', data);
    });
  }

  ListTrazabilidad() {
    this.firebase.collection('trazabilidad').valueChanges().subscribe(data => {
      console.log('trazabilidad', data);
    });
  }

  ListUsuario() {
    this.firebase.collection('usuario').valueChanges().subscribe(data => {
      console.log('usuario', data);
    });
  }

}
