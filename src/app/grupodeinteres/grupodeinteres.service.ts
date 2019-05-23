
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoDeInteres } from './grupodeinteres';
import { GrupoDeInteresDetail } from './grupodeinteres-detail';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const grupodeinteres = '/grupoDeInteres';

/**
* The service provider for everything related to editorials
*/
@Injectable()
export class GrupoDeInteresService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
  
    getGrupoDeInteres() : Observable<GrupoDeInteres[]> {
        return this.http.get<GrupoDeInteres[]>(API_URL + grupodeinteres);
    }

     /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getGrupoDeInteresDetail(grupodeinteresId): Observable<GrupoDeInteresDetail> {
        return this.http.get<GrupoDeInteresDetail>(API_URL +grupodeinteres + '/' +grupodeinteresId);
    }

    createGrupoDeInteres(grupoDeInteres): Observable<GrupoDeInteres> {
        return this.http.post<GrupoDeInteres>(API_URL + grupodeinteres, grupoDeInteres);
    }
    
    deleteComentario(grupoDeInteresId): Observable<boolean> {
        return this.http.delete<boolean>(API_URL + grupodeinteres + '/' + grupoDeInteresId);
    }

    updateComentario(GrupoDeInteres: GrupoDeInteres) {
        return this.http.put<GrupoDeInteres>(API_URL + grupodeinteres + '/' + GrupoDeInteres.id, GrupoDeInteres);
    }
}