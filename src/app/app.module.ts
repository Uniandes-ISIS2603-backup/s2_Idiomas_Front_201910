import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { ComentarioBlogModule } from './comentario-blog/comentario-blog.module';
import { ComentarioGrupoInteresModule } from './comentario-grupo-interes/comentario-grupo-interes.module';
//import { ActividadComponent } from './actividad/actividad.component';
//import { ActividadCreateComponent } from './actividad-create/actividad-create.component';
import { UsuarioModule } from './usuario/usuario.module';
import { AdministradorModule } from './administrador/administrador.module';
import { CoordinadorModule } from './coordinador/coordinador.module';
import { AnfitrionModule } from './anfitrion/anfitrion.module';
import {  ReactiveFormsModule } from '@angular/forms'




@NgModule({
    declarations: [
        AppComponent
//        ,
//        ActividadComponent,
//        ActividadCreateComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ComentarioBlogModule,
        ComentarioGrupoInteresModule,
        UsuarioModule,
        AnfitrionModule,
        AdministradorModule,
        CoordinadorModule,        
        ReactiveFormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}
