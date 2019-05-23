import {
    Component,
    OnInit,
    Output,
    EventEmitter
} from '@angular/core';
import {
    DatePipe
} from '@angular/common';
import {
    ToastrService
} from 'ngx-toastr';
import {
    ComentarioBlogService
} from '../comentario-blog.service';
import {
    ComentarioBlog
} from '../comentario-blog';
import { Usuario } from '../../usuario/usuario';

@Component({
    selector: 'app-comentario-create',
    templateUrl: './comentario-create.component.html',
    styleUrls: ['./comentario-create.component.css'],
    providers: [DatePipe]
})
export class ComentarioCreateComponent implements OnInit {

    /**
     * Constructor for the component
     * @param dp DatePipe to format the date.
     * @param ComentarioBlogService The Comentario's services provider
     * @param toastrService The toastr to show messages to the user
     */
    constructor(
        private dp: DatePipe,
        private comentarioBlogService: ComentarioBlogService,
        private toastrService: ToastrService
    ) {}

    /**
     * The new Comentario
     */
    comentario: ComentarioBlog;

    /**
     * The output which tells the parent component
     * that the user no longer wants to create an Comentario
     */
    @Output() cancel = new EventEmitter();

    /**
     * The output which tells the parent component
     * that the user created a new Comentario
     */
    @Output() create = new EventEmitter();


    /**
     * Creates an Comentario
     */
    createComentario(): ComentarioBlog {


        console.log(this.comentario);
        this.comentarioBlogService.createComentario(this.comentario)
            .subscribe((Comentario) => {
                this.comentario = Comentario;
                this.create.emit();
                this.toastrService.success("The Comentario was created", "Comentario creation");

            });
        return this.comentario;
    }

    /**
     * Emits the signal to tell the parent component that the
     * user no longer wants to create an user
     */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
     * This function will initialize the component
     */
    ngOnInit() {
        this.comentario = new ComentarioBlog();
        
    }

}