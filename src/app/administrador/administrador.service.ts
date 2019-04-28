import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Administrador } from './administrador';
import { AdministradorDetail } from './administrador-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const administradores = '/administradores/';

@Injectable()
export class AdministradorService {

  constructor(private http :HttpClient) { }

  getAdministradores():Observable <Administrador[]>{
   return  this.http.get<Administrador[]>(API_URL+administradores);
  }

  getAdministrador(administradorId):Observable <AdministradorDetail>{
    return  this.http.get<AdministradorDetail>(API_URL + administradores + administradorId );
  }
      createAdministrador(administrador): Observable<Administrador> {
        return this.http.post<Administrador>(API_URL + administradores , administrador);
    }
    
        
/**
* Updates an Administrador
* @param Administrador The Administrador's information updated
* @returns The confirmation that the Administrador was updated
*/
updateAdministrador(administrador: Administrador): Observable<AdministradorDetail> {
    return this.http.put<AdministradorDetail>(API_URL + administradores + administrador.id, administrador);
}

/**
* Deletes an Administrador from the BookStore
* @param AdministradorId The id of the Administrador
* @returns The confirmation that the Administrador was deleted
*/
deleteAdministrador(administradorId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + administradores  + administradorId);
}

}