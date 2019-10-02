/* importamos las clases que tienen 
relacion con la clase producto*/
import { Usuario } from '../interfaces/usuario';
import { Trazabilidad } from './trazabilidad';

export class Pedido {
    idPedido?: number;
    idUsuario: Usuario;
    fechaPedido?: Date;
    perecio?: number;
    cantidad?: number;
    idTrazabilidad?: Trazabilidad;
}
