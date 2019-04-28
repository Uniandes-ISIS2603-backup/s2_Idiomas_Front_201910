import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { AdministradorService} from '../administrador.service'
import { Administrador } from '../administrador';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-administrador-list',
  templateUrl: './administrador-list.component.html',
  styleUrls: ['./administrador-list.component.css']
})
export class AdministradorListComponent implements OnInit {

    constructor(  private viewRef: ViewContainerRef , private modalDialogService: ModalDialogService ,
                private administradorService : AdministradorService, private toastrService: ToastrService) { }

  administradores :Administrador[];

  ngOnInit() {
    this.getAdministradores();
  }

  getAdministradores(){
    this.administradorService.getAdministradores().subscribe(o => this.administradores = o);
  }
  
  /**
    * Deletes an administrador
    */
    deleteAdministrador(administradorId): void {       
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete Administrador',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this Administrador ? this action is permanet' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.administradorService.deleteAdministrador(administradorId).subscribe(() => {
                            this.toastrService.error("The administrador was successfully deleted", "administrador deleted");
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