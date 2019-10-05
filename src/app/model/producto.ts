/* importamos las clases que tienen
relacion con la clase producto*/
import { Categoria } from './categoria';
import {Marketing} from './marketing';

export class Producto {
    $key: string;
    nombre?: string;
    precioProducto?: number;
    categoria?: Categoria;
    marketing?: Marketing;
    descripcion?: string;
    fechaPublicacion?: Date;
}
