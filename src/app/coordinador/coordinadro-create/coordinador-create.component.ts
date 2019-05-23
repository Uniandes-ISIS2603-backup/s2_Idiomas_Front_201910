import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Coordinador} from '../coordinador'
import {CoordinadorService} from '../coordinador.service'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../.././auth/auth.service';

@Component({
  selector: 'app-coordinador-create',
  templateUrl: './coordinador-create.component.html',
  styleUrls: ['./coordinador-create.component.css']
})
export class CoordinadorCreateComponent implements OnInit {

  constructor(private coordinadorService : CoordinadorService ,
        private toastrService: ToastrService, private authService: AuthService
) { }

  coordinadors : Coordinador[];
  public coordinador : Coordinador;
  
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
        this.authService.login('Coordinador');
        this.toastrService.success('Logged in')
    }
  
    /**
    * Creates an coordinador
    */
    createCoordinador(): void {
        var author_create = {
            nombre: this.coordinador.nombre,
            contrasenia : this.coordinador.contrasenia
        };
        this.coordinadorService.createCoordinador(author_create)
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
        this.coordinador = new Coordinador();
    }

}