/* importamos las clases que tienen
relacion con la clase pedido*/
import { Usuario } from './usuario';
import { Trazabilidad } from './trazabilidad';

export class Pedido {
    $key: string;
    usuario: Usuario;
    fechaPedido?: Date;
    perecio?: number;
    cantidad?: number;
    idTrazabilidad?: Trazabilidad;
}
