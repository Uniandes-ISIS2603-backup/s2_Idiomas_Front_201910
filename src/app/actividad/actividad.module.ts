import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { ActividadEditComponent } from './actividad-edit/actividad-edit.component';
import { ActividadListComponent } from './actividad-list/actividad-list.component';
import { ActividadComentarioCreateComponent } from './actividad-comentario-create/actividad-comentario-create.component';
import { ActividadComentarioDetailComponent } from './actividad-comentario-detail/actividad-comentario-detail.component';
import { ActividadComentarioEditComponent } from './actividad-comentario-edit/actividad-comentario-edit.component';
import { ActividadComentarioListComponent } from './actividad-comentario-list/actividad-comentario-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActividadDetailComponent, ActividadEditComponent, ActividadListComponent, ActividadComentarioCreateComponent, ActividadComentarioDetailComponent, ActividadComentarioEditComponent, ActividadComentarioListComponent]
})
export class ActividadModule { }
