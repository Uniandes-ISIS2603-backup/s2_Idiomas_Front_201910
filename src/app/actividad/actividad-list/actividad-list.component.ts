import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ActividadService } from '../actividad.service';
import { Actividad } from '../actividad';
import { ActividadDetail } from '../actividad-detail';
import { ModalDialogService, SimpleModalComponent } from 'ngx-modal-dialog';
import { ToastrService } from 'ngx-toastr';

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
      private modalDialogService: ModalDialogService,
      private viewRef: ViewContainerRef,
      private toastrService: ToastrService) {}

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
  showCreate: boolean;

  /**
   * Shows or hides the detail of an actividad
   */
  showViewA: boolean;

  /**
   * Shows or hides the detail of an chat
   */
  showViewC: boolean;

  /**
   * Shows or hides the detail of an encuentro
   */
  showViewE: boolean;

  /**
   * Shows or hides the detail of an estadia
   */
  showViewF: boolean;

  /**
   * Shows or hides the detail of an otro
   */
  showViewO: boolean;

  /**
  * Shows or hides the edition of an actividad
  */
  showEdit: boolean;

  /**
   * the actividad that the user views.
   */
  selectedActividad: Actividad;


  /**
  * Shows the actividad
  */
  onSelected(actividad_id: number, pActividad: Actividad): void {
      this.showCreate = false;
      this.showEdit = false;
      this.actividad_id = actividad_id;
      this.selectedActividad = new ActividadDetail();
      this.getActividadDetail();
      if(pActividad.pTipo === 'A')
      {
        this.showViewA = true;
      }
      if(pActividad.pTipo === 'C')
      {
        this.showViewC = true;
      }
      if(pActividad.pTipo === 'E')
      {
        this.showViewE = true;
      }
      if(pActividad.pTipo === 'F')
      {
        this.showViewF = true;
      }
      if(pActividad.pTipo === 'O')
      {
        this.showViewO = true;
      }
  }

  /**
  * Shows or hides the create component
  */
  showHideCreate(): void {
      this.showViewA = false;
      this.showEdit = false;
      this.showCreate = !this.showCreate;
  }

  /**
  * Shows or hides the create component
  */
  showHideEdit(actividad_id: number): void {
      if (!this.showEdit || (this.showEdit && actividad_id != this.selectedActividad.id)) {
          this.showViewA = false;
          this.showViewC = false;
          this.showViewE = false;
          this.showViewF = false;
          this.showViewO = false;
          this.showCreate = false;
          this.showEdit = true;
          this.actividad_id = actividad_id;
          this.selectedActividad = new ActividadDetail();
          this.getActividadDetail();
      }
      else {
          this.showEdit = false;
          this.showViewA = true;
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

  updateActividad(): void {
      this.showEdit = false;
      this.showViewA = true;
  }

  /**
  * Deletes an actividad
  */
  deleteActividad(actividadId): void {
      this.modalDialogService.openDialog(this.viewRef, {
          title: 'Delete an actividad',
          childComponent: SimpleModalComponent,
          data: {text: 'Are you sure your want to delete this actividad from your activities?'},
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
              {text: 'No', onAction: () => true}
          ]
      });
  }


  /**
  * This will initialize the component by retrieving the list of actividades from the service
  * This method will be called when the component is created
  */
  ngOnInit() {
      this.showCreate = false;
      this.showViewA = false;
          this.showViewC = false;
          this.showViewE = false;
          this.showViewF = false;
          this.showViewO = false;
      this.showEdit = false;
      this.selectedActividad = undefined;
      this.actividad_id = undefined;
      this.getActividades();
  }
}
