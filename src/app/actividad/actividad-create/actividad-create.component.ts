import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ActividadService } from '../actividad.service';
import { ToastrService } from 'ngx-toastr';
import { Actividad } from '../actividad';

@Component({
  selector: 'app-actividad-create',
  templateUrl: './actividad-create.component.html',
  styleUrls: ['./actividad-create.component.css']
})
export class ActividadCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param actividadService The actividad's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private actividadService: ActividadService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new actividad
    */
    actividad: Actividad;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an actividad
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new actividad
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an actividad
    */
    createActividad(): Actividad {

        let dateB: Date = new Date(this.actividad.fecha.year, this.actividad.fecha.month - 1, this.actividad.fecha.day);

        this.actividad.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        console.log(this.actividad);
        this.actividadService.createActividad(this.actividad)
            .subscribe((actividad) => {
                this.actividad = actividad;
                this.create.emit();
                this.toastrService.success("The actividad was created", "Actividad creation");

            });
        return this.actividad;
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
        this.actividad = new Actividad();
    }

}
