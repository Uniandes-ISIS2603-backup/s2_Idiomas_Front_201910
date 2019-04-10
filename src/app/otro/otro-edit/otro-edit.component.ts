import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { OtroService } from '../otro.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Otro } from '../otro';

@Component({
  selector: 'app-otro-edit',
  templateUrl: './otro-edit.component.html',
  styleUrls: ['./otro-edit.component.css'],
  providers: [DatePipe]
})
export class OtroEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param otroService The otros' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private otroService: OtroService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The otro id as received from the parent component
    */
    @Input() otro: Otro;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an otro
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new otro
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the otro
    */
    editOtro(): void {
        let dateB: Date = new Date(this.otro.fecha.year, this.otro.fecha.month - 1, this.otro.fecha.day);
        this.otro.fecha = dateB;
        this.otroService.updateOtro(this.otro)
            .subscribe(() => {
                this.toastrService.success("The otro's information was updated", "Otro edition");
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
        if (this.otro && this.otro.fecha) {
            this.otro.fecha = this.otro.fecha.substring(0, 10);
            var date = {
                day: + this.otro.fecha.split('-')[2],
                month: + this.otro.fecha.split('-')[1],
                year: + this.otro.fecha.split('-')[0]
            };
            this.otro.fecha = date;
        }
    }

    /**
    * This function will be called when the user chooses another otro to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}