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
  EventEmitter,
  ViewContainerRef
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
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {NgbDate, NgbCalendar} from '@ng-bootstrap/ng-bootstrap';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'list-comentarioblog',
  templateUrl: './comentario-blog-list.component.html',
  styleUrls: ['./comentario-blog-list.component.css'],
  styles: [`
  .custom-day {
    text-align: center;
    padding: 0.185rem 0.25rem;
    display: inline-block;
    height: 2rem;
    width: 2rem;
  }
  .custom-day.focused {
    background-color: #e6e6e6;
  }
  .custom-day.range, .custom-day:hover {
    background-color: rgb(2, 117, 216);
    color: white;
  }
  .custom-day.faded {
    background-color: rgba(2, 117, 216, 0.5);
  }
`],
providers: [DatePipe]

})
export class ComentarioBlogListComponent implements OnInit {

  /**
   * Constructor for the component
   * @param editorialService The author's services provider
   */
  constructor(calendar: NgbCalendar, private comentarioBlogService: ComentarioBlogService, private viewRef: ViewContainerRef, private route: ActivatedRoute, private toastrService: ToastrService, private modalDialogService: ModalDialogService,
    private dp: DatePipe) {
    //this.fromDate = calendar.getToday();
    //this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  /**
   * The list of editorials which belong to the BookStore
   */
  comentarioBlogs: ComentarioBlog[];
  comentarioFecha: ComentarioBlog[];
  comentarioBlogId: number;
  selectedComment: ComentarioBlog;

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;
  f1:string;
  f2:string;

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
    this.comentarioBlogs=[];
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
    * Deletes a comment
    */
   deleteComentario(comentarioId): void {
    this.modalDialogService.openDialog(this.viewRef, {
        title: 'Delete a comment',
        childComponent: SimpleModalComponent,
        data: { text: 'Are you sure your want to delete this comment?' },
        actionButtons: [
            {
                text: 'Yes',
                buttonClass: 'btn btn-danger',
                onAction: () => {
                    this.comentarioBlogService.deleteComentario(comentarioId).subscribe(() => {
                        this.toastrService.error("The comment was successfully deleted", "Comment deleted");
                        this.ngOnInit();
                    }, err => {
                        this.toastrService.error(err, "Error");
                    });
                    return true;
                }
            },
            { text: 'No', onAction: () => true }
        ]
    });
    this.ngOnInit();
}

  //getComentariosFecha(fecha1: Date, fecha2: Date){
  //  this.comentarioBlogService.getComentarioFechas(fecha1, fecha2).subscribe(comentarioFecha => this.comentarioFecha = comentarioFecha);
    //console.log(fecha1 + "----"+fecha2);
  //}




  list: ComentarioBlog[] = [];
  getCommentBetweenDate(fecha1: Date, fecha2: Date): ComentarioBlog[]{
    for (let c of this.comentarioBlogs) {
      if(c.fecha<= fecha2 && c.fecha>= fecha1){
        this.list.push(c);
        console.log(c.texto);
      }
    }
    return this.list;
  }

  

  /**
   *  This will initialize the component by retrieving the list of editorials from the service
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


  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  getComentariosFecha(fecha1: string, fecha2: string){
    this.comentarioFecha=[];
    this.comentarioBlogService.getComentarioFechas(fecha1, fecha2).subscribe(comentarioFecha => this.comentarioFecha = comentarioFecha);
  }
  storeDates(){

    let dateA: Date = new Date(this.fromDate.year, this.fromDate.month-1, this.fromDate.day);
    let dateB: Date = new Date(this.toDate.year, this.toDate.month-1, this.toDate.day);
    this.dp.transform(dateA, 'yyyy/MM/dd');
    this.dp.transform(dateB, 'yyyy/MM/dd');
    this.getComentariosFecha(this.dp.transform(dateA, 'yyyy/MM/dd'),this.dp.transform(dateB, 'yyyy/MM/dd'));
  }

}
