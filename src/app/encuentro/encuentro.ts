import { Actividad } from "../actividad/actividad";

export class Encuentro extends Actividad
{
    // -------------------------------------------------------------------------
    // Atributos
    // -------------------------------------------------------------------------
    
    /**
     * Atributo que representa un lugar
     */
    lugar:string;
    
    /**
     * Atributo que representa el número máximo de asistentes
     */
    numeroMaxAsistentes: number;
    
    /**
     * Atributo que representa si el encuentro fue aprobado
     */
    aprobado: boolean;
}
