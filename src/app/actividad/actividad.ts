export class Actividad {

    // -----------------------------------------------------------------------
    // Atributos
    // -----------------------------------------------------------------------
    
    /**
     * Atributo que representa el Id de la actividad
     */
    id:number;
    
    /**
     * Atributo que representa el nombre de la actividad.
     */
    nombre: string;
    
    /**
     * Atributo que contiene la fecha.
     */
    fecha: any;
    
    /**
     * Atributo que contiene la descripcion de la actividad.
     */
    descripcion: string;
    
    /**
     * Atributo que contiene la motivacion de la actvidad
     */
    motivacion: string;

    /**
     * Atributo que contiene el medio de la actividad
     */
    medio: string;

    /**
     * Atributo que representa el lugar del encuentro.
     */
    lugar: string;
    
    /**
     * Atributo que representa el número máximo de asistentes del encuentro.
     */
    numeroMaxAsistentes: number;
    
    /**
     * Atributo que modela el estado de aprobación del encuentro.
     */
    aprobado: boolean;

    /**
     * Atributo que contiene el tipo de la actividad
     */
    pTipo: string;

    /**
     * Atributo que indica el pais en el que se va a realizar la estadia.
     */
    pais: string;
    
    /**
     * Atributo que indica el anfitrion de la estadia.
     */
    //private AnfitrionDTO anfitrion;
    
    /**
     * Atributo que contiene la calificación de la actividad
     */
    // TODO: Integrar con calificacion
    //calificacion: Calificacion;
}
