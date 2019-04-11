import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EncuentroService } from '../encuentro.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Encuentro } from '../encuentro';

@Component({
  selector: 'app-encuentro-edit',
  templateUrl: './encuentro-edit.component.html',
  styleUrls: ['./encuentro-edit.component.css'],
  providers: [DatePipe]
})
export class EncuentroEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param encuentroService The encuentros' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private encuentroService: EncuentroService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The encuentro id as received from the parent component
    */
    @Input() encuentro: Encuentro;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an encuentro
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new encuentro
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the encuentro
    */
    editEncuentro(): void {
        let dateB: Date = new Date(this.encuentro.fecha.year, this.encuentro.fecha.month - 1, this.encuentro.fecha.day);
        this.encuentro.fecha = dateB;
        this.encuentroService.updateEncuentro(this.encuentro)
            .subscribe(() => {
                this.toastrService.success("The encuentro's information was updated", "Encuentro edition");
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
        if (this.encuentro && this.encuentro.fecha) {
            this.encuentro.fecha = this.encuentro.fecha.substring(0, 10);
            var date = {
                day: + this.encuentro.fecha.split('-')[2],
                month: + this.encuentro.fecha.split('-')[1],
                year: + this.encuentro.fecha.split('-')[0]
            };
            this.encuentro.fecha = date;
        }
    }

    /**
    * This function will be called when the user chooses another encuentro to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}