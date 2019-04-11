import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ListarCalificacionesComponent } from './listar-calificaciones/listar-calificaciones.component';
import { CalificacionesService } from './calificaciones.service';
import { CalificacionesDetailComponent } from './calificaciones-detail/calificaciones-detail/calificaciones-detail.component';
import { CalificacionCreateComponent } from './calificacion-create/calificacion-create.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [ListarCalificacionesComponent],
  declarations: [ListarCalificacionesComponent, CalificacionesDetailComponent, CalificacionCreateComponent],
  providers: [CalificacionesService],
})
export class CalificacionesModule { }