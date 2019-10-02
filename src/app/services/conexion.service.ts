import { Injectable } from '@angular/core';
// importamos agularfireDatabase y anguarList
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Trazabilidad } from '../interfaces/trazabilidad';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  categoriaList: AngularFireList<any>;
  detalleProductoList: AngularFireList<any>;
  marketingList: AngularFireList<any>;
  pedidoList: AngularFireList<any>;
  productoList: AngularFireList<any>;
  promocionList: AngularFireList<any>;
  trazabilidadList: AngularFireList<any>;
  usuarioList: AngularFireList<any>;

  constructor() { }
}
