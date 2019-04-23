import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Estadia } from './estadia';
import { Observable } from 'rxjs';
import { EstadiaDetail } from './estadia-detail';


const API_URL = environment.apiURL;
const estadias = '/estadia';

@Injectable()
export class EstadiaService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of estadias retrieved from the API
    * @returns The list of estadias in real time
    */
   getEstadias(): Observable<Estadia[]> {
    return this.http.get<Estadia[]>(API_URL + estadias);
}

/**
* Returns the Observable object with the details of an Estadia retrieved from the API
* @returns The Estadia details
*/
getEstadiaDetail(estadiaId: number): Observable<EstadiaDetail> {
    return this.http.get<EstadiaDetail>(API_URL + estadias + '/' + estadiaId);
}

/**
* Creates an Estadia
* @param estadia The new Estadia
* @returns The confirmation that the Estadia was created
*/
createEstadia(estadia: Estadia): Observable<Estadia> {
    return this.http.post<Estadia>(API_URL + estadias, estadia);
}

/**
* Updates an Estadia
* @param Estadia The Estadia's information updated
* @returns The confirmation that the Estadia was updated
*/
updateEstadia(estadia: Estadia): Observable<EstadiaDetail> {
    return this.http.put<EstadiaDetail>(API_URL + estadias + '/' + estadia.id, estadia);
}

/**
* Deletes an Estadia from the BookStore
* @param EstadiaId The id of the Estadia
* @returns The confirmation that the Estadia was deleted
*/
deleteEstadia(estadiaId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + estadias + '/' + estadiaId);
}
}