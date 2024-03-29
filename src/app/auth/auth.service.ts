import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {NgxRolesService, NgxPermissionsService} from 'ngx-permissions'
import 'rxjs/add/operator/catch';

/**
 * The service provider for everything related to authentication
 */
@Injectable()
export class AuthService {

    /**
     * Constructor of the service
     * @param router Angular's Router to redirect the user on login or logout
     * @param roleService NgxRolesService to manage authentication roles
     * @param permissionsService NgxPermissionsService to manage authentication permissions
     */
    constructor (private router: Router, private roleService: NgxRolesService, private permissionsService: NgxPermissionsService) { }

    start (): void {
        this.permissionsService.flushPermissions();
        this.roleService.flushRoles();
        this.permissionsService.loadPermissions(['edit_author_permission', 'delete_author_permission', 'leave_review']);
        //const role = localStorage.getItem('role');
       // if (role === 'Usuario') {
            this.setGuestRole();
        //}// else if (role === 'ADMIN') {
         //   this.setAdministratorRole();
        //} else if(role==='Coordinador'){
        //    this.setClientRole();
        //}
        //else if(role==='Anfitrion'){
        //    this.setAnfitrionRole();
        //}
        this.printRole();
    }

    setGuestRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('GUEST', ['']);
        localStorage.setItem('role', 'GUEST');
        this.printRole();
    }

    setUserRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('Usuario', ['']);
        localStorage.setItem('role', 'Usuario');
        this.printRole();
    }

    setClientRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('Coordinador', ['leave_review']);
        localStorage.setItem('role', 'Coordinador');
        this.printRole();
    }

    setAdministratorRole (): void {
        this.roleService.flushRoles();
        this.roleService.addRole('ADMIN', ['edit_author_permission', 'delete_author_permission']);
        localStorage.setItem('role', 'ADMIN');
        this.printRole();
    }


    printRole (): void {
        console.log(this.roleService.getRoles());
    }

    /**
     * Logs the user in with the desired role
     * @param role The desired role to set to the user
     */
    login (role): void {
        if (role === 'ADMIN') {
            this.setAdministratorRole();
        } else if(role==="Coordinador"){
            this.setClientRole()
        } else if(role==="Usuario"){
            this.setUserRole()
        }
        this.router.navigateByUrl('/');
    }

    /**
     * Logs the user out
     */
    logout (): void {
        this.roleService.flushRoles();
        this.setGuestRole();
        localStorage.removeItem('role');
        this.router.navigateByUrl('/');
    }
}
