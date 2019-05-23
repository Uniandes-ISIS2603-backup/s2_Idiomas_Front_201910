import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { AuthService } from '../auth.service';

import { User } from '../user';
import {Administrador} from '../../administrador/administrador';
import {AdministradorService} from '../../administrador/administrador.service';
import {Usuario} from '../../usuario/usuario';
import {UsuarioService} from '../../usuario/usuario.service';
import {Anfitrion} from '../../anfitrion/anfitrion';
import {AnfitrionService} from '../../anfitrion/anfitrion.service';
import { ToastrService } from 'ngx-toastr';
import { logging } from 'protractor';
//import { userInfo } from 'os';

@Component({
    selector: 'app-auth-login',
    templateUrl: './auth-login.component.html',
    styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param authService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private authService: AuthService,
        private toastrService: ToastrService,
    ) { }

    user: User;
    rol:string
    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.authService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    asignarRol(rolA:string):void{
        this.rol = rolA

    }



    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['ADMIN', 'Coordinador'];
    }

}
