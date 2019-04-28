import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anfitrion } from './anfitrion';
import { AnfitrionDetail } from './anfitrion-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const anfitriones = '/anfitriones/';


@Injectable()
export class AnfitrionService {

  constructor(private http: HttpClient) { }

  getAnfitrions(): Observable<Anfitrion[]> {
    return this.http.get<Anfitrion[]>(API_URL + anfitriones);
  }
  getAnfitrionDetail(anfitrionId): Observable<AnfitrionDetail> {
    return this.http.get<AnfitrionDetail>(API_URL + anfitriones + anfitrionId );
  }
      createAnfitrion(anfitrion): Observable<Anfitrion> {
        return this.http.post<Anfitrion>(API_URL + anfitriones , anfitrion);
    }

    
/**
* Updates an Anfitrion
* @param Anfitrion The Anfitrion's information updated
* @returns The confirmation that the Anfitrion was updated
*/
    updateAnfitrion(anfitrion: Anfitrion): Observable<AnfitrionDetail> {
    return this.http.put<AnfitrionDetail>(API_URL + anfitriones + anfitrion.id, anfitrion);
}

/**
* Deletes an Anfitrion from the BookStore
* @param AnfitrionId The id of the Anfitrion
* @returns The confirmation that the Anfitrion was deleted
*/
deleteAnfitrion(anfitrionId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + anfitriones  + anfitrionId);
}

}
