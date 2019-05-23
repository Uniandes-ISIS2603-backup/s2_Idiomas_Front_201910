import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Administrador} from '../administrador'
import {AdministradorService} from '../administrador.service'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../.././auth/auth.service';

@Component({
  selector: 'app-administrador-create',
  templateUrl: './administrador-create.component.html',
  styleUrls: ['./administrador-create.component.css']
})
export class AdministradorCreateComponent implements OnInit {

  constructor(private administradorService : AdministradorService ,
        private toastrService: ToastrService,private authService: AuthService
) { }

 
  public administrador : Administrador;
  
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

  
    login(): void {
        this.authService.login('ADMIN');
        this.toastrService.success('Logged in')
    }
  
    /**
    * Creates an administrador
    */
    createAdministrador(): void {
        //var author_create = {
        //    nombre: this.administrador.nombre,
        //    contrasenia : this.administrador.contrasenia
        //};
        this.administradorService.createAdministrador(this.administrador)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The author was created", "Author creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
            console.log(this.administrador);
    }
    
    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }
    
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.administrador = new Administrador();
    }

}