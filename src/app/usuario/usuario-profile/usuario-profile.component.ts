import {Component, OnInit, Input, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {UsuarioService} from '../usuario.service';
import {Usuario} from '../usuario';
import {UsuarioDetail} from '../usuario-detail';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';


@Component({
    selector: 'app-usuario-profile',
    templateUrl: './usuario-profile.component.html',
    styleUrls: ['./usuario-profile.component.css']
})
export class UsuarioProfileComponent implements OnInit {

    constructor(private usuarioService: UsuarioService,
        private route: ActivatedRoute, private viewRef: ViewContainerRef 
        , private modalDialogService: ModalDialogService 
        , private toastrService: ToastrService  ) {}

    /**
     * The usuario whose profiles we want to show
     */
    usuarioDetail: UsuarioDetail;
    actividades: number[];
    grupos: number[];



    /**
    * The usuario's id retrieved from the address
    */
    @Input() usuario_id: number;

    loader: any;
    /**
    * The method which retrieves the books of an usuario
    */
    getUsuarioProfile(): void {

        console.log(this.getCookie("idDelLogeado"));
        this.usuarioService.getUsuarioDetail(this.getCookie("idDelLogeado"))
            .subscribe(o => {
                this.usuarioDetail = o;
                this.usuarioDetail.nombre = o.nombre;
                console.log("nombre: " + o.nombre);
                this.usuarioDetail.contrasenia = o.contrasenia;
                this.actividades = o.actividades;
                this.grupos = o.grupos;
            });
    }

    //    onLoad(params) {
    //
    //        this.usuario_id = parseInt(params['id']);
    //        console.log(" en profile " + this.usuario_id);
    //        
    //    }
    ngOnInit() {
        this.usuarioDetail = new UsuarioDetail();
        this.getUsuarioProfile();
    }

    //    ngOnDestroy() {
    //        this.loader.unsubscribe();
    //    }

    getCookie(name: String) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");

        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }

    /**
       * Deletes an usuario
       */
    deleteUsuario(usuarioId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete User',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this user ? this action is permanet'},
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
                {text: 'No', onAction: () => true}
            ]
        });
    }

}