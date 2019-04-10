import { Actividad } from "./actividad";
//import { Usuario } from "../usuario/usuario";
import { ComentarioBlog } from "../comentario-blog/comentario-blog";

export class ActividadDetail extends Actividad {

    /**
     * Lista que contiene los usuarios que están asociados con
     * esta actividad.
     */
    //asistentes: Usuario [];
    
    /**
     * Lista que contiene los comentarios que están
     * asociados con esta actividad.
     */
    comentarios: ComentarioBlog[];

    /**
     * Lista de tipo UsuarioDTO contiene los usuarios que están asociados con
     * esta estadia.
     */
    //private List<UsuarioDTO> usuario;
}
