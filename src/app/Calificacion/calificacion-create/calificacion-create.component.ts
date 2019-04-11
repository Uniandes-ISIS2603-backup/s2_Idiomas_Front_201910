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
    private dp: DatePipe,
    private calificacionesService: CalificacionesService,
    private toastrService: ToastrService
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

        console.log(this.calificacion);
        this.calificacionesService.createCalificacion(this.calificacion)
            .subscribe((Calificacion) => {
                this.calificacion = Calificacion;
                this.create.emit();
                this.toastrService.success("The Calificacion was created", "Calificacion creation");

            });
        return this.calificacion;
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