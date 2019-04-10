import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Encuentro } from './encuentro';
import { Observable } from 'rxjs';


const API_URL = environment.apiURL;
const encuentros = '/encuentro';

@Injectable()
export class EncuentroService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of encuentros retrieved from the API
    * @returns The list of encuentros in real time
    */
   getEncuentros(): Observable<Encuentro[]> {
    return this.http.get<Encuentro[]>(API_URL + encuentros);
}

/**
* Returns the Observable object with the details of an Encuentro retrieved from the API
* @returns The Encuentro details
*/
getEncuentroDetail(encuentroId: number): Observable<Encuentro> {
    return this.http.get<Encuentro>(API_URL + encuentros + '/' + encuentroId);
}

/**
* Creates an Encuentro
* @param encuentro The new Encuentro
* @returns The confirmation that the Encuentro was created
*/
createEncuentro(encuentro: Encuentro): Observable<Encuentro> {
    return this.http.post<Encuentro>(API_URL + encuentros, encuentro);
}

/**
* Updates an Encuentro
* @param Encuentro The Encuentro's information updated
* @returns The confirmation that the Encuentro was updated
*/
updateEncuentro(encuentro: Encuentro): Observable<Encuentro> {
    return this.http.put<Encuentro>(API_URL + encuentros + '/' + encuentro.id, encuentro);
}

/**
* Deletes an Encuentro from the BookStore
* @param EncuentroId The id of the Encuentro
* @returns The confirmation that the Encuentro was deleted
*/
deleteEncuentro(encuentroId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + encuentros + '/' + encuentroId);
}
}