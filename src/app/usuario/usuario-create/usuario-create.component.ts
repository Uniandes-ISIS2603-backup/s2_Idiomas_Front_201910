import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Usuario} from '../usuario'
import {UsuarioService} from '../usuario.service'
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {

  constructor(private usuarioService : UsuarioService ,
        private toastrService: ToastrService
) { }

  usuarios : Usuario[];
  public usuario : Usuario;
  
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
    * Creates an usuario
    */
    createUsuario(): void {
        var author_create = {
            nombre: this.usuario.nombre,
            contrasenia : this.usuario.contrasenia
        };
        this.usuarioService.createUsuario(author_create)
            .subscribe(() => {
                this.create.emit();
                this.toastrService.success("The author was created", "Author creation");
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
    
    
    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.usuario = new Usuario();
    }

}