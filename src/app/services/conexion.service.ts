import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Categoria } from '../interfaces/categoria';

@Injectable({
  providedIn: 'root'
})
export class ConexionService {

  private url = 'http//:127.0.0.1/apiProyecto/petServidor.php';
  constructor(private http: HttpClient) {
  }

  vista(cate: Categoria) {
    return this.http.patch(`${this.url}`, cate)
      .pipe(
        map(result => {
          console.log(result);
          // return this.createArray(result);
        }));
  }

  mostrar() {
    console.log('hola');
    return this.http.get('http//:localhost/apiProyecto/petServidor.php')
      .pipe(map(resp => {
        console.log(resp);
        // return this.crearArreglo(resp);
      }));
  }

  crearArreglo(Obj: Object) {
    const categ: Categoria[] = [];
    // hacemos el barrido de las llaves
    Object.keys(Obj).forEach(key => {
      const cate: Categoria = Obj[key];
      categ.push(cate);
    });
    return categ;
  }

}
