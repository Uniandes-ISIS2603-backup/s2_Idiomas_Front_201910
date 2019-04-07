/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import { Component, OnInit } from '@angular/core';
import {ComentarioBlogService} from '../comentario-blog.service'
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import {ComentarioBlog} from '../comentario-blog'
@Component({
  selector: 'list-comentarioblog',
  templateUrl: './comentario-blog-list.component.html',
  styleUrls: ['./comentario-blog-list.component.css']
})
export class ComentarioBlogListComponent implements OnInit {

  /**
     * Constructor for the component
     * @param editorialService The author's services provider
     */
    constructor(private comentarioBlogService: ComentarioBlogService,  private route: ActivatedRoute) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    comentarioBlogs: ComentarioBlog[];
     

    /**
     * Asks the service to update the list of editorials
     */
    getComments(): void {
        this.comentarioBlogService.getComments().subscribe(comentarioBlogs => this.comentarioBlogs = comentarioBlogs);
    }

    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getComments();
    }

}