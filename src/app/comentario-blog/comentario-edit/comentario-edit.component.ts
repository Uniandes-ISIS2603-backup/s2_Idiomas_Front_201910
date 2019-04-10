import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';

import {DatePipe} from '@angular/common';
import {ComentarioBlogService} from '../comentario-blog.service';
import {ComentarioBlog} from '../comentario-blog';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-comentario-edit',
    templateUrl: './comentario-edit.component.html',
    styleUrls: ['./comentario-edit.component.css'],
    providers: [DatePipe]
})
export class ComentarioEditComponent implements OnInit, OnChanges {

    textoP:string;
    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param comentarioService The comentarios' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private comentarioService: ComentarioBlogService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The comentario id as received from the parent component
    */
    @Input() comentario: ComentarioBlog;

    @Input() comentario_id: number;
    /**
    * The output which tells the parent component
    * that the user no longer wants to create an comentario
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new comentario
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the comentario
    */
    editComentario(): void {
       // let textoP: String = new String(this.comentario.texto);
        //this.comentario.texto = this.textoP;
        /*this.comentarioService.updateComentario(this.comentario)
            .subscribe(() => {
                this.toastrService.success("The comentario's information was updated", "Comentario edition");
            });
        this.update.emit();*/
    }

    getComentario(): void {
        this.comentarioService.getComentarioBlogDetail(this.comentario_id)
            .subscribe(comentario => {
                this.comentario = comentario;
            });
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.comentario = new ComentarioBlog();
        this.getComentario();
    }

    /**
    * This function will be called when the user chooses another comentario to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}