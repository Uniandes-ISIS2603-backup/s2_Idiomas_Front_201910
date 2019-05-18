import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/auth.service';

/**
 * The app component. This component is the base of s2_idiomas-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "s2_idiomas-Front";
        this.authService.start();
    }

    /**
  * @ignore
  */
    constructor(private authService: AuthService) {}

    logout(): void {
        this.deleteCookie("idDelLogeado");
        this.authService.logout()
    }

    deleteCookie(name: String) {
        const date = new Date();

        // Set it expire in -1 days
        date.setTime(date.getTime() + (-1 * 24 * 60 * 60 * 1000));

        // Set it
        document.cookie = name + "=; expires=" + date.toUTCString() + "; path=/";
    }
}





