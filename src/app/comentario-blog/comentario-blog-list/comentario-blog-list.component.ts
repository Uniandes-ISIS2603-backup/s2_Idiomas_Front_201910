/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

import {
  Component,
  OnInit,
  Input,
  OnChanges,
  Output,
  EventEmitter
} from '@angular/core';
import {
  ComentarioBlogService
} from '../comentario-blog.service'
import {
  ActivatedRoute
} from '@angular/router';
import 'rxjs/add/operator/filter';
import {
  ComentarioBlog
} from '../comentario-blog'
import {
  ToastrService
} from 'ngx-toastr';
import {
  ComentarioBlogDetailComponent
} from '../comentario-blog-detail/comentario-blog-detail.component';

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
  constructor(private comentarioBlogService: ComentarioBlogService, private route: ActivatedRoute, private toastrService: ToastrService) {}

  /**
   * The list of editorials which belong to the BookStore
   */
  comentarioBlogs: ComentarioBlog[];
  comentarioBlogId: number;
  selectedComment: ComentarioBlog;

  /**
   * Shows or hides the actividad-create-component
   */
  showCreate: boolean;

  /**
   * Shows or hides the detail of an actividad
   */
  showView: boolean;

  /**
   * Shows or hides the edition of an actividad
   */
  showEdit: boolean;

  @Output() update = new EventEmitter();

  /**
   * Asks the service to update the list of editorials
   */
  getComments(): void {
    this.comentarioBlogService.getComments().subscribe(comentarioBlogs => this.comentarioBlogs = comentarioBlogs);
  }

  /**
   * Cuenta la cantidad de comentarios que hay en la base de datos.
   */
  cont: number;
  countComments(): number {
    this.cont = 0;
    for (let c of this.comentarioBlogs) {
      this.cont++;
    }
    return this.cont;
  }


  /**
   * Shows the comment
   */
  onSelected(comentarioId: number): void {
    this.showCreate = false;
    this.showEdit = false;
    this.showView = true;
    this.comentarioBlogId = comentarioId;
    this.selectedComment = new ComentarioBlog();

    console.log(comentarioId);
  }

  /**
   * Retorna el detalle de un comentario
   */
  getCommentDetail(): void {
    this.comentarioBlogService.getComentarioBlogDetail(this.comentarioBlogId)
      .subscribe(selectedComment => {
        this.selectedComment = selectedComment
      });
  }

  /**
   * Shows or hides the create component
   */
  showHideCreate(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreate = !this.showCreate;
  }


  /**
   * Shows or hides the edit component
   */
  showHideEdit(comentario_id: number): void {
    if (!this.showEdit || (this.showEdit && comentario_id != this.selectedComment.id)) {
      this.showView = false;
      this.showCreate = false;
      this.showEdit = true;
      this.comentarioBlogId = comentario_id;
      this.selectedComment = new ComentarioBlog();
      this.getCommentDetail();
    } else {
      this.showEdit = false;
      this.showView = true;

    }
  }

  /**
   * This will initialize the component by retrieving the list of editorials from the service
   * This method will be called when the component is created
   */
  ngOnInit() {
    this.showCreate = false;
    this.showView = false;
    this.showEdit = false;
    this.selectedComment = undefined;
    this.comentarioBlogId = undefined;
    this.getComments();
  }

}
