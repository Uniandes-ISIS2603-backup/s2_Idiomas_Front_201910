import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';


import {User} from '../user';

import {ToastrService} from 'ngx-toastr';
import {CookieService} from 'ngx-cookie-service';
import {UsuarioService} from '../../usuario/usuario.service';
import {Usuario} from '../../usuario/usuario';
import {AuthService} from '../auth.service';

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
        private cookieService: CookieService,
        private usuarioService: UsuarioService
    ) {}

    user: User;
    usuario: Usuario;
    roles: String[];


    getUsuarioByName(): void {

        this.usuarioService.getUsuarioByName(this.user.name)
            .subscribe(o => {
                this.usuario = o;
                this.usuario.nombre = o.nombre;
                this.usuario.contrasenia = o.contrasenia;

            });
    }
    verificar(): boolean {
        var x = false;
        if (this.user.password == this.usuario.contrasenia) {
            x = true;
        }
        return x;
    }

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.getUsuarioByName();

        if (this.verificar()) {
            this.setCookie("nombreUsuarioLogeado", this.usuario.nombre)
            this.setCookie("idDelLogeado", ""+this.usuario.id)
            this.authService.login(this.user.role);
            this.toastrService.success('Logged in ' + this.usuario.nombre + ' el cookie de id quedo con valor de ' + this.getCookie("idDelLogeado") )
        }
        else {
            this.toastrService.error('Error algo salio mal')
        }
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Client'];
    }

    /*
 * General utils for managing cookies in Typescript.
 */
    setCookie(name: String, val: String) {
        const date = new Date();
        const value = val;

        // Set it expire in 7 days
        date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = name + "=" + value + "; expires=" + date.toUTCString() + "; path=/";
    }

    getCookie(name: String) {
        const value = "; " + document.cookie;
        const parts = value.split("; " + name + "=");

        if (parts.length == 2) {
            return parts.pop().split(";").shift();
        }
    }

    deleteCookie(name: String) {
        const date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
    }

}
