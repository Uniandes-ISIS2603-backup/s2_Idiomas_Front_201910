import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Otro } from './otro';
import { Observable } from 'rxjs';


const API_URL = environment.apiURL;
const otros = '/otro';

@Injectable()
export class OtroService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of otros retrieved from the API
    * @returns The list of otros in real time
    */
   getOtros(): Observable<Otro[]> {
    return this.http.get<Otro[]>(API_URL + otros);
}

/**
* Returns the Observable object with the details of an Otro retrieved from the API
* @returns The Otro details
*/
getOtroDetail(otroId: number): Observable<Otro> {
    return this.http.get<Otro>(API_URL + otros + '/' + otroId);
}

/**
* Creates an Otro
* @param otro The new Otro
* @returns The confirmation that the Otro was created
*/
createOtro(otro: Otro): Observable<Otro> {
    return this.http.post<Otro>(API_URL + otros, otro);
}

/**
* Updates an Otro
* @param Otro The Otro's information updated
* @returns The confirmation that the Otro was updated
*/
updateOtro(otro: Otro): Observable<Otro> {
    return this.http.put<Otro>(API_URL + otros + '/' + otro.id, otro);
}

/**
* Deletes an Otro from the BookStore
* @param OtroId The id of the Otro
* @returns The confirmation that the Otro was deleted
*/
deleteOtro(otroId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + otros + '/' + otroId);
}
}