/* importamos las clases que tieen
relacion con la clase promocion */
import { Producto } from './producto';
import { Usuario } from './usuario';
import { Categoria } from './categoria';

export class Promocion {
    $key: string;
    fechaInicio?: Date;
    fechaFinal?: Date;
    nomberProducto?: string;
    precioPromocion?: number;
    precioNormal?: number;
    categoria?: number;
    usuario?: number;
    cantidad?: number;
    idProducto?: number;
}
