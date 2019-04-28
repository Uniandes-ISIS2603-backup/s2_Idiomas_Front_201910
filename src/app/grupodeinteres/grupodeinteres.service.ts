
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GrupoDeInteres } from './grupodeinteres';
import { GrupoDeInteresDetail } from './grupodeinteres-detail';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
//const grupodeinteres = 'editorials.json';

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
        return this.http.get<GrupoDeInteresDetail>(API_URL + "grupo de interes-" + grupodeinteresId+".json");
    }
    
}