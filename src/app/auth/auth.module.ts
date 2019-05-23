import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSignUpComponent } from './auth-sign-up/auth-sign-up.component';
import { AdministradorCreateComponent} from '../administrador/administrador-create/administrador-create.component';
import { UsuarioCreateComponent} from '../usuario/usuario-create/usuario-create.component';
import { AnfitrionCreateComponent} from '../anfitrion/anfitrion-create/anfitrion-create.component';
import { CoordinadorCreateComponent} from '../coordinador/coordinadro-create/coordinador-create.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [AuthLoginComponent, AuthSignUpComponent, AdministradorCreateComponent,UsuarioCreateComponent,AnfitrionCreateComponent,CoordinadorCreateComponent],
    providers: [AuthService],
    bootstrap: [AuthLoginComponent]
})
export class AuthModule { }
