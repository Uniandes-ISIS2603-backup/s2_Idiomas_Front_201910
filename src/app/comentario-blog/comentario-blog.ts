/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Usuario} from '../usuario/usuario';
import { Actividad } from '../actividad/actividad';

export class ComentarioBlog {

titulo: string;

id: number;

texto: string;

fecha: Date;

autor: Usuario;

actividad: Actividad;
    
/*constructor(titulo: string, id: number, texto: string, fecha:Date, autor:string) {
    this.titulo = titulo;
    this.id = id;
    this.texto = texto;
    this.fecha = fecha;
    this.autor = autor;
}
*/

}

