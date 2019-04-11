/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { ComentarioBlog } from './comentario-blog';
//import { ComentarioBlogDetail } from './comentario-blog-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const comments = '/comments';


/**
* The service provider for everything related to authors
*/
@Injectable()
export class ComentarioBlogService {
    
    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }
    
    /**
    * Returns the Observable object containing the list of authors retrieved from the API
    * @returns The list of authors in real time
    */
    getComments(): Observable<ComentarioBlog[]> {
        return this.http.get<ComentarioBlog[]>(API_URL + comments);
    }
    
    /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getComentarioBlogDetail(comentarioBlogId): Observable<ComentarioBlog> {
        return this.http.get<ComentarioBlog>(API_URL + comments + '/' + comentarioBlogId);
    }
    
    createComentario(comentarioBlog): Observable<ComentarioBlog> {
        return this.http.post<ComentarioBlog>(API_URL + comments, comentarioBlog);
    }
}

