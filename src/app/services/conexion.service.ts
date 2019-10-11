import { Injectable } from '@angular/core';
// importamos agularfireDatabase y anguarList
// import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
// modelos de datos
import { Categoria } from '../model/categoria';
import { Marketing } from '../model/marketing';
import { Pedido } from '../model/pedido';
import { Producto } from '../model/producto';
import { Promocion } from '../model/promocion';
import { Trazabilidad } from '../model/trazabilidad';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  categoria: Categoria[];


  // Creamos las colecciones de angularFireStore
  categoriaColeccion: AngularFirestoreCollection<Categoria>;
  marketingColeccion: AngularFirestoreCollection<Marketing>;
  pedidoColeccion: AngularFirestoreCollection<Pedido>;
  productoColeccion: AngularFirestoreCollection<Producto>;
  promocioncoleccion: AngularFirestoreCollection<Promocion>;
  trazabilidadColeccion: AngularFirestoreCollection<Trazabilidad>;
  usuarioColeccion: AngularFirestoreCollection<Usuario>;

  // Se crean los observables
  categorialist: Observable<Categoria[]>;
  marketinglist: Observable<Marketing[]>;
  pedidoslist: Observable<Pedido[]>;
  productolist: Observable<Producto[]>;
  promocionlist: Observable<Promocion[]>;
  trazabilidadlist: Observable<Trazabilidad[]>;
  usuariolist: Observable<Usuario[]>;

  constructor(private firebase: AngularFirestore) { }

  listadoProductos() {
    this.productoColeccion = this.firebase.collection('producto');
    this.productolist = this.productoColeccion.valueChanges();
    console.log('productos 1', this.productolist);
  }

  ListProductos() {
    this.firebase.collection('producto').valueChanges().subscribe((data: any) => {
      this.productolist = data;
      console.log('productos', this.productolist);
    });
  }

  listaCategoria() {
    this.firebase.collection('categoria').valueChanges().subscribe(data => {
      console.log('categoria', data);
    });
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
