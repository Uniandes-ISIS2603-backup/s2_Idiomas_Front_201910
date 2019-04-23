import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EstadiaService } from '../estadia.service';
import { ToastrService } from 'ngx-toastr';
import { Estadia } from '../estadia';

@Component({
  selector: 'app-estadia-create',
  templateUrl: './estadia-create.component.html',
  styleUrls: ['./estadia-create.component.css'],
  providers: [DatePipe]
})
export class EstadiaCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param estadiaService The estadia's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private estadiaService: EstadiaService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The new estadia
    */
    estadia: Estadia;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an estadia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new estadia
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an estadia
    */
    createEstadia(): Estadia {

        let dateB: Date = new Date(this.estadia.fecha.year, this.estadia.fecha.month - 1, this.estadia.fecha.day);

        this.estadia.fecha = dateB;
        console.log(this.estadia);
        this.estadiaService.createEstadia(this.estadia)
            .subscribe((estadia) => {
                this.estadia = estadia;
                this.create.emit();
                this.toastrService.success("The estadia was created", "Estadia creation");

            });
        return this.estadia;
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
        this.estadia = new Estadia();
    }

}