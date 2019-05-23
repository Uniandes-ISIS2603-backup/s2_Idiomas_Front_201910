import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Anfitrion} from '../anfitrion'
import {AnfitrionService} from '../anfitrion.service'
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../.././auth/auth.service';

@Component({
  selector: 'app-anfitrion-create',
  templateUrl: './anfitrion-create.component.html',
  styleUrls: ['./anfitrion-create.component.css']
})
export class AnfitrionCreateComponent implements OnInit {

  constructor(private anfitrionService : AnfitrionService ,
        private toastrService: ToastrService, private authService: AuthService
) { }


  public anfitrion : Anfitrion;
  
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
        this.authService.login('Anfitrion');
        this.toastrService.success('Logged in')
    }
  
    /**
    * Creates an anfitrion
    */
    createAnfitrion(): void {
        var author_create = {
            nombre: this.anfitrion.nombre,
            contrasenia : this.anfitrion.contrasenia
        };
        this.anfitrionService.createAnfitrion(author_create)
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
        this.anfitrion = new Anfitrion();
    }

}