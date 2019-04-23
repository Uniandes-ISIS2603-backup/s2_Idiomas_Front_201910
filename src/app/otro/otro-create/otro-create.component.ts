import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { OtroService } from '../otro.service';
import { ToastrService } from 'ngx-toastr';
import { Otro } from '../otro';

@Component({
  selector: 'app-otro-create',
  templateUrl: './otro-create.component.html',
  styleUrls: ['./otro-create.component.css'],
  providers: [DatePipe]
})
export class OtroCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param otroService The otro's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private otroService: OtroService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The new otro
    */
    otro: Otro;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an otro
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new otro
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an otro
    */
    createOtro(): Otro {

        let dateB: Date = new Date(this.otro.fecha.year, this.otro.fecha.month - 1, this.otro.fecha.day);

        this.otro.fecha = dateB;
        console.log(this.otro);
        this.otroService.createOtro(this.otro)
            .subscribe((otro) => {
                this.otro = otro;
                this.create.emit();
                this.toastrService.success("The otro was created", "Otro creation");

            });
        return this.otro;
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
        this.otro = new Otro();
    }

}