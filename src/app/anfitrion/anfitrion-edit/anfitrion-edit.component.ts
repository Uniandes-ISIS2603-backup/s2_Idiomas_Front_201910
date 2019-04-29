import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Anfitrion} from '../anfitrion'
import {AnfitrionService} from '../anfitrion.service'
import { ToastrService } from 'ngx-toastr';
import {AnfitrionDetail} from '../anfitrion-detail';
import {ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-anfitrion-edit',
  templateUrl: './anfitrion-edit.component.html',
  styleUrls: ['./anfitrion-edit.component.css']
})
export class AnfitrionEditComponent implements OnInit {

  constructor(private anfitrionService : AnfitrionService ,
        private toastrService: ToastrService ,private route: ActivatedRoute
) { }

  anfitrions : Anfitrion[];
  public anfitrion : AnfitrionDetail;
   /**
  * The anfitrion's id retrieved from the address
  */
  @Input() anfitrion_id: number;

  loader: any;
  
   /**
    * The output which tells the parent component
    * that the user no longer wants to create an author
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new author
    */
    @Output() create = new EventEmitter();

  

  
    /**
    * Creates an anfitrion
    */
    editAnfitrion(): void {
       
        
        var anfitrion_editado: Anfitrion = {
            id: this.anfitrion.id,
            nombre: this.anfitrion.nombre,
            contrasenia : this.anfitrion.contrasenia,
            pais: this.anfitrion.pais,
            ciudad: this.anfitrion.ciudad,
            direccion: this.anfitrion.direccion
            
        };
        this.anfitrionService.updateAnfitrion(anfitrion_editado)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The author was updated", "Author update");
            }, err => {
                this.toastrService.error(err, "Error");
            });
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
   onLoad(params) {

    this.anfitrion_id = parseInt(params['id']);
    console.log(" en update " + this.anfitrion_id);
    this.anfitrionService.getAnfitrionDetail(this.anfitrion_id)
      .subscribe(o => {
        this.anfitrion = o});  
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}