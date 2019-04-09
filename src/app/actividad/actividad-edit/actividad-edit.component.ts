import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActividadService } from '../actividad.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { ActividadDetail } from '../actividad-detail';

@Component({
  selector: 'app-actividad-edit',
  templateUrl: './actividad-edit.component.html',
  styleUrls: ['./actividad-edit.component.css']
})
export class ActividadEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param actividadService The actividades' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private actividadService: ActividadService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The actividad id as received from the parent component
    */
    @Input() actividad: ActividadDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an actividad
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new actividad
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the actividad
    */
    editActividad(): void {
        let dateB: Date = new Date(this.actividad.fecha.year, this.actividad.fecha.month - 1, this.actividad.fecha.day);
        this.actividad.fecha = this.dp.transform(dateB, 'yyyy-MM-dd');
        this.actividadService.updateActividad(this.actividad)
            .subscribe(() => {
                this.toastrService.success("The actividad's information was updated", "Actividad edition");
            });
        this.update.emit();
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
        if (this.actividad && this.actividad.fecha) {
            this.actividad.fecha = this.actividad.fecha.substring(0, 10);
            var date = {
                day: + this.actividad.fecha.split('-')[2],
                month: + this.actividad.fecha.split('-')[1],
                year: + this.actividad.fecha.split('-')[0]
            };
            this.actividad.fecha = date;
        }
    }

    /**
    * This function will be called when the user chooses another actividad to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}
