/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import {ComentarioBlogService} from '../comentario-blog.service'
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';
import {ComentarioBlog} from '../comentario-blog'
import {ToastrService} from 'ngx-toastr';
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
    constructor(private comentarioBlogService: ComentarioBlogService,  private route: ActivatedRoute, private toastrService: ToastrService) { }
    
    /**
     * The list of editorials which belong to the BookStore
     */
    comentarioBlogs: ComentarioBlog[];
    comentarioBlogId: number;
    selectedComment : ComentarioBlog;

    @Output() update = new EventEmitter();

    /**
     * Asks the service to update the list of editorials
     */
    getComments(): void {
        this.comentarioBlogService.getComments().subscribe(comentarioBlogs => this.comentarioBlogs = comentarioBlogs);
    }

    cont:number;
    countComments(): number{
      this.cont = 0;
      for(let c of this.comentarioBlogs){
        this.cont++;
      }
      return this.cont;
    }


    
    onSelected(comentarioId: number):void {
        this.comentarioBlogId = comentarioId;
        this.selectedComment = new ComentarioBlog();
 
        console.log(comentarioId);
    }

    getCommentDetail(): void {
      this.comentarioBlogService.getComentarioBlogDetail(this.comentarioBlogId)
          .subscribe(selectedComment => {
              this.selectedComment = selectedComment
          });
  }



    /**
     * This will initialize the component by retrieving the list of editorials from the service
     * This method will be called when the component is created
     */
    ngOnInit() {
        this.getComments();
    }

}