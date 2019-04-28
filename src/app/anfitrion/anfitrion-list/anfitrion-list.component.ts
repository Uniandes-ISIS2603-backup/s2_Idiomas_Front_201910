import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {Anfitrion} from '../anfitrion'
import {AnfitrionService} from '../anfitrion.service'
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-anfitrion-list',
  templateUrl: './anfitrion-list.component.html',
  styleUrls: ['./anfitrion-list.component.css']
})
export class AnfitrionListComponent implements OnInit {

  constructor(private viewRef: ViewContainerRef , private modalDialogService: ModalDialogService , private toastrService: ToastrService, 
                    private anfitrionService : AnfitrionService) { }

  anfitriones : Anfitrion[];

  ngOnInit() 
  {
    this.getAnfitrions();
  }

  getAnfitrions() : void {
   this.anfitrionService.getAnfitrions().subscribe(losU => this.anfitriones = losU);
  }
  
  /**
    * Deletes an anfitrion
    */
    deleteAnfitrion(anfitrionId): void {       
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete User',
            childComponent: SimpleModalComponent,
            data: { text: 'Are you sure your want to delete this user ? this action is permanet' },
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.anfitrionService.deleteAnfitrion(anfitrionId).subscribe(() => {
                            this.toastrService.error("The anfitrion was successfully deleted", "anfitrion deleted");
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