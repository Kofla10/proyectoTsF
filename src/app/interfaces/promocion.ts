/* importamos las clases que tieen
relacion con la clase promocion */
import {Producto} from '../interfaces/producto';
import {Usuario} from '../interfaces/usuario';
import {Categoria} from '../interfaces/categoria';

export class Promocion {
    idPromocion?: number;
    fechaInicio?: Date;
    fechaFinal?: Date;
    nomberProducto?: string;
    precioPromocion?: number;
    precioNormal?: number;
    idCategoria?: number;
    idUsuario?: number;
    idProducto?: number;
}
