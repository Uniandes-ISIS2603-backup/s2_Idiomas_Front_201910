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
    ActividadDetailComponent,
    ActividadEditComponent,
    ActividadListComponent,
    ActividadComentarioCreateComponent,
    ActividadComentarioDetailComponent,
    ActividadComentarioEditComponent,
    ActividadComentarioListComponent],
  providers: [ActividadService]
})
export class ActividadModule { }
