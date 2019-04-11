import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {CalificacionesService} from '../calificaciones.service';
import {Calificacion} from '../calificacion';

@Component({
  selector: 'app-calificacion-create',
  templateUrl: './calificacion-create.component.html',
  styleUrls: ['./calificacion-create.component.css']
})
export class CalificacionCreateComponent implements OnInit {

  constructor(
    private calificacionesService: CalificacionesService,
  ) { }

    /**
    * The new calificacion
    */
    calificacion: Calificacion;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create a calificacion
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new calificacion
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a calificacion
    */
    createCalificacion(): Calificacion {

        let dateB: Date = new Date(this.author.birthDate.year, this.author.birthDate.month - 1, this.author.birthDate.day);

        this.author.birthDate = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log(this.author);
        this.authorService.createAuthor(this.author)
            .subscribe((author) => {
                this.author = author;
                this.create.emit();
                this.toastrService.success("The author was created", "Author creation");

            });
        return this.author;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create a calificacion
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

}