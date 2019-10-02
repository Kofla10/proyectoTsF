// importamos categoria
import { Categoria } from '../interfaces/categoria';
// importamos maketing
import {Marketing} from '../interfaces/marketing';

export class Producto {
    idProducto?: number;
    nombre?: string;
    precioProducto?: number;
    idCategoria?: Categoria;
    idMarketing?: Marketing;
    descripcion?: string;
    fechaPublicacion?: Date;
}
