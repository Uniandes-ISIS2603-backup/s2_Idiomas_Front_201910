import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Calificacion } from './calificacion';
import { CalificacionDetail } from './calificacion-detail';
import { Observable } from 'rxjs';
//import {environment} from '../../environments/environment';

//const API_URL = environment.apiURL;
const API_URL = '../assets/';
const calificaciones = 'calificaciones.json';
@Injectable()
export class CalificacionesService {

  constructor(private http : HttpClient) { 
  }
  getCalificaciones() : Observable<Calificacion[]>{
      return this.http.get<Calificacion[]>(API_URL + calificaciones);
    }
  
  getCalificacionDetail(calificacionId) : Observable<CalificacionDetail> {
        return this.http.get<CalificacionDetail>(API_URL + "calificacion-" + calificacionId+".json");
  }

  
    /**
    * Creates a calificacion
    * @param calificacion The new calificacion
    * @returns The confirmation that the calificacion was created
    */
    createCalificacion(calificacion): Observable<CalificacionDetail> {
        return this.http.post<CalificacionDetail>(API_URL + calificaciones, calificacion);
    }
}