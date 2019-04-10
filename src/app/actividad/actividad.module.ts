import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxPermissionsModule } from 'ngx-permissions';
import { AppRoutingModule } from '../app-routing/app-routing.module';

import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { ActividadEditComponent } from './actividad-edit/actividad-edit.component';
import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadComentarioCreateComponent } from './actividad-comentario-create/actividad-comentario-create.component';
import { ActividadComentarioDetailComponent } from './actividad-comentario-detail/actividad-comentario-detail.component';
import { ActividadComentarioEditComponent } from './actividad-comentario-edit/actividad-comentario-edit.component';
import { ActividadComentarioListComponent } from './actividad-comentario-list/actividad-comentario-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ActividadService } from './actividad.service';
import { ActividadCreateComponent } from './actividad-create/actividad-create.component';
import { ChatCreateComponent } from '../chat/chat-create/chat-create.component';
import { ChatDetailComponent } from '../chat/chat-detail/chat-detail.component';
import { ChatEditComponent } from '../chat/chat-edit/chat-edit.component';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';
import { EncuentroCreateComponent } from '../encuentro/encuentro-create/encuentro-create.component';
import { EncuentroDetailComponent } from '../encuentro/encuentro-detail/encuentro-detail.component';
import { EncuentroEditComponent } from '../encuentro/encuentro-edit/encuentro-edit.component';
import { EncuentroListComponent } from '../encuentro/encuentro-list/encuentro-list.component';
import { EstadiaCreateComponent } from '../estadia/estadia-create/estadia-create.component';
import { EstadiaDetailComponent } from '../estadia/estadia-detail/estadia-detail.component';
import { EstadiaEditComponent } from '../estadia/estadia-edit/estadia-edit.component';
import { EstadiaListComponent } from '../estadia/estadia-list/estadia-list.component';
import { OtroCreateComponent } from '../otro/otro-create/otro-create.component';
import { OtroDetailComponent } from '../otro/otro-detail/otro-detail.component';
import { OtroEditComponent } from '../otro/otro-edit/otro-edit.component';
import { OtroListComponent } from '../otro/otro-list/otro-list.component';
import { ChatService } from '../chat/chat.service';
import { EncuentroService } from '../encuentro/encuentro.service';
import { EstadiaService } from '../estadia/estadia.service';


@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    ActividadCreateComponent,
    ActividadDetailComponent,
    ActividadEditComponent,
    ActividadListComponent,
    ActividadComentarioCreateComponent,
    ActividadComentarioDetailComponent,
    ActividadComentarioEditComponent,
    ActividadComentarioListComponent,
    ChatCreateComponent,
    ChatDetailComponent,
    ChatEditComponent,
    ChatListComponent,
    EncuentroCreateComponent,
    EncuentroDetailComponent,
    EncuentroEditComponent,
    EncuentroListComponent,
    EstadiaCreateComponent,
    EstadiaDetailComponent,
    EstadiaEditComponent,
    EstadiaListComponent,
    OtroCreateComponent,
    OtroDetailComponent,
    OtroEditComponent,
    OtroListComponent],
    providers: [ActividadService,
      ChatService,
      EncuentroService,
      EstadiaService/*,
      OtroService*/]
})
export class ActividadModule { }
