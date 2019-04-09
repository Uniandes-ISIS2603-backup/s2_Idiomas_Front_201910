import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Actividad } from './actividad';
import { Observable } from 'rxjs';
import { ActividadDetail } from './actividad-detail';


const API_URL = environment.apiURL;
const actividades = '/actividades';

@Injectable()
export class ActividadService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of actividades retrieved from the API
    * @returns The list of actividades in real time
    */
   getActividades(): Observable<Actividad[]> {
    return this.http.get<Actividad[]>(API_URL + actividades);
}

/**
* Returns the Observable object with the details of an Actividad retrieved from the API
* @returns The Actividad details
*/
getActividadDetail(actividadId: number): Observable<ActividadDetail> {
    return this.http.get<ActividadDetail>(API_URL + actividades + '/' + actividadId);
}

/**
* Creates an Actividad
* @param actividad The new Actividad
* @returns The confirmation that the Actividad was created
*/
createActividad(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(API_URL + actividades, actividad);
}

/**
* Updates an Actividad
* @param Actividad The Actividad's information updated
* @returns The confirmation that the Actividad was updated
*/
updateActividad(actividad: Actividad): Observable<ActividadDetail> {
    return this.http.put<ActividadDetail>(API_URL + actividades + '/' + actividad.id, actividad);
}

/**
* Deletes an Actividad from the BookStore
* @param ActividadId The id of the Actividad
* @returns The confirmation that the Actividad was deleted
*/
deleteActividad(actividadId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + actividades + '/' + actividadId);
}
}
