import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const usuarios = '/usuarios/';

@Injectable()
export class UsuarioService
     {


  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

/**
    * Returns the Observable object containing the list of usuarios retrieved from the API
    * @returns The list of usuarios in real time
    */
  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(API_URL + usuarios);
  }
  
  
/**
* Returns the Observable object with the details of an Usuario retrieved from the API
* @returns The Usuario details
*/
  getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
    return this.http.get<UsuarioDetail>(API_URL + usuarios + usuarioId );
  }
  
/**
* Creates an Usuario
* @param usuario The new Usuario
* @returns The confirmation that the Usuario was created
*/
    createUsuario(usuario): Observable<Usuario> {
        return this.http.post<Usuario>(API_URL + usuarios , usuario);
    }
    
    
    
/**
* Updates an Usuario
* @param Usuario The Usuario's information updated
* @returns The confirmation that the Usuario was updated
*/
updateUsuario(usuario: Usuario): Observable<UsuarioDetail> {
    return this.http.put<UsuarioDetail>(API_URL + usuarios + usuario.id, usuario);
}

/**
* Deletes an Usuario from the BookStore
* @param UsuarioId The id of the Usuario
* @returns The confirmation that the Usuario was deleted
*/
deleteUsuario(usuarioId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + usuarios  + usuarioId);
}

}