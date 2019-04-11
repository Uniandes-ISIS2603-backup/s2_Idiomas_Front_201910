import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios/';

@Injectable()
export class UsuarioService {

  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }
  getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(API_URL + usuarios + usuarioId );
  }
    createUsuario(usuario): Observable<Usuario> {
        return this.http.post<Usuario>(API_URL + usuarios , usuario);
    }

}