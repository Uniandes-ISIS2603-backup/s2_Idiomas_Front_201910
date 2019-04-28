import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {Administrador} from '../administrador'
import {AdministradorService} from '../administrador.service'
import { ToastrService } from 'ngx-toastr';
import {AdministradorDetail} from '../administrador-detail';
import {ActivatedRoute , Params} from '@angular/router';

@Component({
  selector: 'app-administrador-edit',
  templateUrl: './administrador-edit.component.html',
  styleUrls: ['./administrador-edit.component.css']
})
export class AdministradorEditComponent implements OnInit {

  constructor(private administradorService : AdministradorService ,
        private toastrService: ToastrService ,private route: ActivatedRoute
) { }

  administradors : Administrador[];
  public administrador : AdministradorDetail;
   /**
  * The administrador's id retrieved from the address
  */
  @Input() administrador_id: number;

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
    * Creates an administrador
    */
    editAdministrador(): void {
       
        
        var administrador_editado: Administrador = {
            id: this.administrador.id,
            nombre: this.administrador.nombre,
            contrasenia : this.administrador.contrasenia,
            
        };
        this.administradorService.updateAdministrador(administrador_editado)
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

    this.administrador_id = parseInt(params['id']);
    console.log(" en update " + this.administrador_id);
    this.administradorService.getAdministrador(this.administrador_id)
      .subscribe(o => {
        this.administrador = o});  
  }
  ngOnInit() {
    this.loader = this.route.params.subscribe((params: Params) => this.onLoad(params));
  }

  ngOnDestroy() {
    this.loader.unsubscribe();
  }

}