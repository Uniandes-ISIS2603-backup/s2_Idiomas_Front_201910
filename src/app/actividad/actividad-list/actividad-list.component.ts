import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActividadService } from '../actividad.service';
import { Actividad } from '../actividad';
import { ActividadDetail } from '../actividad-detail';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';
import { Chat } from '../../chat/chat';
import { ChatService } from '../../chat/chat.service';
import { EstadiaService } from '../../estadia/estadia.service';
import { OtroService } from '../../otro/otro.service';
import { EncuentroService } from '../../encuentro/encuentro.service';
import { Encuentro } from '../../encuentro/encuentro';
import { EstadiaDetail } from '../../estadia/estadia-detail';
import { Otro } from '../../otro/otro';
import { Estadia } from '../../estadia/estadia';

@Component({
    selector: 'app-actividad-list',
    templateUrl: './actividad-list.component.html',
    styleUrls: ['./actividad-list.component.css']
})
export class ActividadListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param actividadService The actividad's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private actividadService: ActividadService,
        private chatService: ChatService,
        private encuentroService: EncuentroService,
        private estadiaService: EstadiaService,
        private otroService: OtroService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) { }

    /**
    * The list of actividades which belong to the BookStore
    */
    actividades: Actividad[];

    /**
    * The id of the actividad that the user wants to view
    */
    actividad_id: number;

    /**
    * Shows or hides the actividad-create-component
    */
    showCreateA: boolean;

    /**
    * Shows or hides the actividad-create-component
    */
    showCreateC: boolean;

    /**
  * Shows or hides the actividad-create-component
  */
    showCreateE: boolean;

    /**
     * Shows or hides the actividad-create-component
     */
    showCreateF: boolean;

    /**
     * Shows or hides the actividad-create-component
     */
    showCreateO: boolean;

    /**
     * Shows or hides the detail of an actividad
     */
    showViewA: boolean;

    /**
     * Shows or hides the detail of an actividad
     */
    showViewC: boolean;

    /**
     * Shows or hides the detail of an actividad
     */
    showViewE: boolean;

    /**
     * Shows or hides the detail of an actividad
     */
    showViewF: boolean;

    /**
     * Shows or hides the detail of an actividad
     */
    showViewO: boolean;

    /**
    * Shows or hides the edition of an actividad
    */
    showEditA: boolean;

    /**
    * Shows or hides the edition of an actividad
    */
    showEditC: boolean;

    /**
     * Shows or hides the edition of an actividad
     */
    showEditE: boolean;

    /**
     * Shows or hides the edition of an actividad
     */
    showEditF: boolean;

    /**
    * Shows or hides the edition of an actividad
    */
    showEditO: boolean;

    /**
     * the actividad that the user views.
     */
    selectedActividad: Actividad;

    /**
     * the chat that the user views.
     */
    selectedChat: Chat;

    /**
     * the encuentro that the user views.
     */
    selectedEncuentro: Encuentro;

    /**
     * the estadia that the user views.
     */
    selectedEstadia: Estadia;
    
    /**
     * the estadia that the user views.
     */
    selectedOtro: Otro;



    /**
    * Shows the actividad
    */
    onSelected(actividad_id: number, actividad: Actividad): void {
        this.showCreateA = false;
        this.showCreateC = false;
        this.showCreateE = false;
        this.showCreateF = false;
        this.showCreateO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.actividad_id = actividad_id;
        if (actividad.pTipo === 'A') {
            this.showViewA = true;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.selectedActividad = new ActividadDetail();
            this.getActividadDetail();
        }
        if (actividad.pTipo === 'C') {
            this.showViewC = true;
            this.showViewA = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.selectedChat = new Chat();
            this.getChatDetail();
        }
        if (actividad.pTipo === 'E') {
            this.showViewE = true;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewF = false;
            this.showViewO = false;
            this.selectedEncuentro = new Encuentro();
            this.getEncuentroDetail();
        }
        if (actividad.pTipo === 'F') {
            this.showViewF = true;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewO = false;
            this.selectedEstadia = new Estadia();
            this.getEstadiaDetail();
        }
        if (actividad.pTipo === 'O') {
            this.showViewO = true;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.selectedOtro = new Otro();
            this.getOtroDetail();
        }
    }

    /**
    * Shows or hides the create component
    */
    showHideCreateA(): void {
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.showCreateA = !this.showCreateA;
        this.showCreateC = false;
        this.showCreateE = false;
        this.showCreateF = false;
        this.showCreateO = false;
    }
    /**
    * Shows or hides the create component
    */
    showHideCreateC(): void {
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.showCreateC = !this.showCreateC;
        this.showCreateA = false;
        this.showCreateE = false;
        this.showCreateF = false;
        this.showCreateO = false;
    }

    /**
    * Shows or hides the create component for actividad
    */
    showHideCreateE(): void {
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.showCreateE = !this.showCreateE;
        this.showCreateA = false;
        this.showCreateC = false;
        this.showCreateF = false;
        this.showCreateO = false;
    }

    /**
    * Shows or hides the create component for actividad
    */
    showHideCreateF(): void {
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.showCreateF = !this.showCreateF;
        this.showCreateA = false;
        this.showCreateC = false;
        this.showCreateE = false;
        this.showCreateO = false;
    }

    /**
    * Shows or hides the create component for actividad
    */
    showHideCreateO(): void {
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.showCreateO = !this.showCreateO;
        this.showCreateA = false;
        this.showCreateC = false;
        this.showCreateE = false;
        this.showCreateF = false;
    }

    /**
    * Shows or hides the edit component
    */
    showHideEdit(actividad_id: number): void {
        if (!this.showEditA || (this.showEditA && actividad_id != this.selectedActividad.id)) {
            this.showCreateA = false;
            this.showCreateC = false;
            this.showCreateE = false;
            this.showCreateF = false;
            this.showCreateO = false;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.showEditA = true;
            this.actividad_id = actividad_id;
            this.selectedActividad = new ActividadDetail();
            this.getActividadDetail();
        }
        else {
            this.showEditA = false;
            this.showViewA = true;
        }
        if (!this.showEditC || (this.showEditC && actividad_id != this.selectedActividad.id)) {
            this.showCreateA = false;
            this.showCreateC = false;
            this.showCreateE = false;
            this.showCreateF = false;
            this.showCreateO = false;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.showEditC = true;
            this.actividad_id = actividad_id;
            this.selectedChat = new Chat();
            this.getChatDetail();
        }
        else {
            this.showEditC = false;
            this.showViewC = true;
        }
        if (!this.showEditE || (this.showEditE && actividad_id != this.selectedActividad.id)) {
            this.showCreateA = false;
            this.showCreateC = false;
            this.showCreateE = false;
            this.showCreateF = false;
            this.showCreateO = false;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.showEditE = true;
            this.actividad_id = actividad_id;
            this.selectedEncuentro = new Encuentro();
            this.getEncuentroDetail();
        }
        else {
            this.showEditE = false;
            this.showViewE = true;
        }
        if (!this.showEditF || (this.showEditF && actividad_id != this.selectedActividad.id)) {
            this.showCreateA = false;
            this.showCreateC = false;
            this.showCreateE = false;
            this.showCreateF = false;
            this.showCreateO = false;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.showEditF = true;
            this.actividad_id = actividad_id;
            this.selectedEstadia = new EstadiaDetail();
            this.getEstadiaDetail();
        }
        else {
            this.showEditF = false;
            this.showViewF = true;
        }
        if (!this.showEditO || (this.showEditO && actividad_id != this.selectedActividad.id)) {
            this.showCreateA = false;
            this.showCreateC = false;
            this.showCreateE = false;
            this.showCreateF = false;
            this.showCreateO = false;
            this.showViewA = false;
            this.showViewC = false;
            this.showViewE = false;
            this.showViewF = false;
            this.showViewO = false;
            this.showEditO = true;
            this.actividad_id = actividad_id;
            this.selectedOtro = new Otro();
            this.getOtroDetail();
        }
        else {
            this.showEditO = false;
            this.showViewO = true;
        }
    }

    /**
    * Asks the service to update the list of actividades
    */
    getActividades(): void {
        this.actividadService.getActividades()
            .subscribe(actividades => {
                this.actividades = actividades;
            });
    }

    getActividadDetail(): void {
        this.actividadService.getActividadDetail(this.actividad_id)
            .subscribe(selectedActividad => {
                this.selectedActividad = selectedActividad
            });
    }

    getChatDetail(): void {
        this.chatService.getChatDetail(this.actividad_id)
            .subscribe(selectedChat => {
                this.selectedChat = selectedChat
            });
    }

    getEncuentroDetail(): void {
        this.encuentroService.getEncuentroDetail(this.actividad_id)
            .subscribe(selectedEncuentro => {
                this.selectedEncuentro = selectedEncuentro
            });
    }

    getEstadiaDetail(): void {
        this.estadiaService.getEstadiaDetail(this.actividad_id)
            .subscribe(selectedEstadia => {
                this.selectedEstadia = selectedEstadia
            });
    }

    getOtroDetail(): void {
        this.otroService.getOtroDetail(this.actividad_id)
            .subscribe(selectedOtro => {
                this.selectedOtro = selectedOtro
            });
    }

    updateActividad(): void {
        if (this.showEditA) {
            this.showEditA = false;
            this.showViewA = true;
        }
        if (this.showEditC) {
            this.showEditC = false;
            this.showViewC = true;
        }
        if (this.showEditE) {
            this.showEditE = false;
            this.showViewE = true;
        }
        if (this.showEditF) {
            this.showEditF = false;
            this.showViewF = true;
        }
        if (this.showEditO) {
            this.showEditO = false;
            this.showViewO = true;
        }

    }

    /**
    * Deletes an actividad
    */
    deleteActividad(actividadId): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete an actividad',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this actividad from your activities?' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.actividadService.deleteActividad(actividadId).subscribe(() => {
                            this.toastrService.error("The actividad was successfully deleted", "Actividad deleted");
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


    /**
    * This will initialize the component by retrieving the list of actividades from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreateA = false;
        this.showCreateC = false;
        this.showCreateE = false;
        this.showCreateF = false;
        this.showCreateO = false;
        this.showViewA = false;
        this.showViewC = false;
        this.showViewE = false;
        this.showViewF = false;
        this.showViewO = false;
        this.showEditA = false;
        this.showEditC = false;
        this.showEditE = false;
        this.showEditF = false;
        this.showEditO = false;
        this.selectedActividad = undefined;
        this.actividad_id = undefined;
        this.getActividades();
    }
}
