import { Component, OnInit, Output, EventEmitter, ViewContainerRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { EncuentroService } from '../encuentro.service';
import { ToastrService } from 'ngx-toastr';
import { Encuentro } from '../encuentro';

@Component({
  selector: 'app-encuentro-create',
  templateUrl: './encuentro-create.component.html',
  styleUrls: ['./encuentro-create.component.css'],
  providers: [DatePipe]
})
export class EncuentroCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param encuentroService The encuentro's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private encuentroService: EncuentroService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The new encuentro
    */
    encuentro: Encuentro;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an encuentro
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new encuentro
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an encuentro
    */
    createEncuentro(): Encuentro {

        let dateB: Date = new Date(this.encuentro.fecha.year, this.encuentro.fecha.month - 1, this.encuentro.fecha.day);

        this.encuentro.fecha = dateB;
        console.log(this.encuentro);
        this.encuentroService.createEncuentro(this.encuentro)
            .subscribe((encuentro) => {
                this.encuentro = encuentro;
                this.create.emit();
                this.toastrService.success("The encuentro was created", "Encuentro creation");

            });
        return this.encuentro;
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
        this.encuentro = new Encuentro();
    }

}