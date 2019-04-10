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
  showCreateA: boolean;

  /**
  * Shows or hides the actividad-create-component
  */
 showCreateC: boolean;

 /**
  * Shows or hides the actividad-create-component
  */
 showCreateEs: boolean;

 /**
  * Shows or hides the actividad-create-component
  */
 showCreateEn: boolean;

 /**
  * Shows or hides the actividad-create-component
  */
 showCreateO: boolean;

  /**
   * Shows or hides the detail of an actividad
   */
  showView: boolean;

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
  onSelected(actividad_id: number): void {
      this.showCreateA = false;
      this.showCreateC = false;
      this.showCreateEn = false;
      this.showCreateEs = false;
      this.showCreateO = false;
      this.showEdit = false;
      this.showView = true;
      this.actividad_id = actividad_id;
      this.selectedActividad = new ActividadDetail();
      this.getActividadDetail();
  }

  /**
  * Shows or hides the create component for actividad
  */
  showHideCreateC(): void {
      this.showView = false;
      this.showEdit = false;
      this.showCreateC = !this.showCreateC;
  }

  /**
  * Shows or hides the create component for actividad
  */
 showHideCreateEn(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreateEn = !this.showCreateEn;
}

/**
  * Shows or hides the create component for actividad
  */
 showHideCreateEs(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreateEn = !this.showCreateEs;
}

  /**
  * Shows or hides the create component for actividad
  */
 showHideCreateA(): void {
    this.showView = false;
    this.showEdit = false;
    this.showCreateA = !this.showCreateA;
}

  /**
  * Shows or hides the create component
  */
  showHideEdit(actividad_id: number): void {
      if (!this.showEdit || (this.showEdit && actividad_id != this.selectedActividad.id)) {
          this.showView = false;
          this.showCreateA = false;
          this.showCreateC = false;
          this.showCreateEn = false;
          this.showCreateEs = false;
          this.showCreateO = false;
          this.showEdit = true;
          this.actividad_id = actividad_id;
          this.selectedActividad = new ActividadDetail();
          this.getActividadDetail();
      }
      else {
          this.showEdit = false;
          this.showView = true;
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
      this.showView = true;
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
        this.showCreateA = false;
    this.showCreateC = false;
    this.showCreateEn = false;
    this.showCreateEs = false;
    this.showCreateO = false;
      this.showView = false;
      this.showEdit = false;
      this.selectedActividad = undefined;
      this.actividad_id = undefined;
      this.getActividades();
  }
}
