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

import { ActividadCreateComponent} from './actividad/actividad-create/actividad-create.component';


import {UsuarioModule} from './usuario/usuario.module';
import {AdministradorModule} from './administrador/administrador.module';
import {CoordinadorModule} from './coordinador/coordinador.module';
import {AnfitrionModule} from './anfitrion/anfitrion.module';
import {ReactiveFormsModule} from '@angular/forms'
import {ActividadModule} from './actividad/actividad.module';
import {CalificacionesModule} from './Calificacion/calificaciones.module';
import {EstadiaModule} from './estadia/estadia.module';
import {EncuentroModule} from './encuentro/encuentro.module';
import {OtroModule} from './otro/otro.module';
import {ChatModule} from './chat/chat.module';





@NgModule({
    declarations: [
        AppComponent,

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
        UsuarioModule,
        AnfitrionModule,
        AdministradorModule,
        CoordinadorModule,
        ReactiveFormsModule,
        CalificacionesModule,
        ActividadModule,
        EstadiaModule,
        ChatModule,
        EncuentroModule,
        OtroModule,

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
