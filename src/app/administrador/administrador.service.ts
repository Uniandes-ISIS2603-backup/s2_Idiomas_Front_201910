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
      createAdministrador(usuario): Observable<Administrador> {
        return this.http.post<Administrador>(API_URL + administradores , usuario);
    }

}