import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coordinador } from './coordinador';
import { CoordinadorDetail } from './coordinador-detail';

import { environment } from '../../environments/environment';
const coordinadores = '/coordinadores';

const API_URL = environment.apiURL;

@Injectable()
export class CoordinadorService {

  constructor(private http: HttpClient) { }

  getCoordinadors(): Observable<Coordinador[]> {
    return this.http.get<Coordinador[]>(API_URL + coordinadores);
  }
  getCoordinadorDetail(coordinadorId): Observable<CoordinadorDetail> {
    return this.http.get<CoordinadorDetail>(API_URL + "cordinadores/" + coordinadorId  );
  }

}