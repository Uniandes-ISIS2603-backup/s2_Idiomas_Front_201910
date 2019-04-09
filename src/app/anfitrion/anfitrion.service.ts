import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Anfitrion } from './anfitrion';
import { AnfitrionDetail } from './anfitrion-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const anfitrions = '/anfitriones';


@Injectable()
export class AnfitrionService {

  constructor(private http: HttpClient) { }

  getAnfitrions(): Observable<Anfitrion[]> {
    return this.http.get<Anfitrion[]>(API_URL + anfitrions);
  }
  getAnfitrionDetail(anfitrionId): Observable<AnfitrionDetail> {
    return this.http.get<AnfitrionDetail>(API_URL + "anfitrions/" + anfitrionId );
  }

}