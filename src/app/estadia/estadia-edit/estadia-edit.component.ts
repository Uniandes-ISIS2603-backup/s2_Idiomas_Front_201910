import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EstadiaService } from '../estadia.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { EstadiaDetail } from '../estadia-detail';

@Component({
  selector: 'app-estadia-edit',
  templateUrl: './estadia-edit.component.html',
  styleUrls: ['./estadia-edit.component.css'],
  providers: [DatePipe]
})
export class EstadiaEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param estadiaService The estadias' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private estadiaService: EstadiaService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The estadia id as received from the parent component
    */
    @Input() estadia: EstadiaDetail;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an estadia
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new estadia
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the estadia
    */
    editEstadia(): void {
        let dateB: Date = new Date(this.estadia.fecha.year, this.estadia.fecha.month - 1, this.estadia.fecha.day);
        this.estadia.fecha = dateB;
        this.estadiaService.updateEstadia(this.estadia)
            .subscribe(() => {
                this.toastrService.success("The estadia's information was updated", "Estadia edition");
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
        if (this.estadia && this.estadia.fecha) {
            this.estadia.fecha = this.estadia.fecha.substring(0, 10);
            var date = {
                day: + this.estadia.fecha.split('-')[2],
                month: + this.estadia.fecha.split('-')[1],
                year: + this.estadia.fecha.split('-')[0]
            };
            this.estadia.fecha = date;
        }
    }

    /**
    * This function will be called when the user chooses another estadia to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}