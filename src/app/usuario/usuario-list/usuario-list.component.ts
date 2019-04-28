import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Usuario} from '../usuario'
import {UsuarioService} from '../usuario.service'
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
       

  constructor(  private viewRef: ViewContainerRef , private modalDialogService: ModalDialogService , private toastrService: ToastrService,
                private usuarioService : UsuarioService)  { }

  usuarios : Usuario[];

  ngOnInit() 
  {
    this.getUsuarios();
  }

  getUsuarios() : void {
   this.usuarioService.getUsuarios().subscribe(losU => this.usuarios = losU);
  }
  
  /**
    * Deletes an usuario
    */
    deleteUsuario(usuarioId): void {       
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete User',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this user ? this action is permanet' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.usuarioService.deleteUsuario(usuarioId).subscribe(() => {
                            this.toastrService.error("The usuario was successfully deleted", "usuario deleted");
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