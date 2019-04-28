import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Coordinador} from '../coordinador'
import {CoordinadorService} from '../coordinador.service'
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-coordinador-list',
  templateUrl: './coordinador-list.component.html',
  styleUrls: ['./coordinador-list.component.css']
})
export class CoordinadorListComponent implements OnInit {

      constructor(  private viewRef: ViewContainerRef , private modalDialogService: ModalDialogService ,
                private coordinadorService : CoordinadorService, private toastrService: ToastrService) { }
  coordinadores : Coordinador[];

  ngOnInit() 
  {
    this.getCoordinadors();
  }

  getCoordinadors() : void {
   this.coordinadorService.getCoordinadors().subscribe(losU => this.coordinadores = losU);
  }
  
  /**
    * Deletes an coordinador
    */
    deleteCoordinador(coordinadorId): void {       
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete Coordinador',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this Coordinador ? this action is permanet' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.coordinadorService.deleteCoordinador(coordinadorId).subscribe(() => {
                            this.toastrService.error("The coordinador was successfully deleted", "coordinador deleted");
                            this.ngOnInit();
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                { text: 'No', onAction: () => true }
            ]
        });
    }
}