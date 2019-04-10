import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadDetailComponent } from './actividad-detail/actividad-detail.component';
import { ActividadEditComponent } from './actividad-edit/actividad-edit.component';
import { ActividadListComponent } from './actividad-list/actividad-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ActividadDetailComponent, ActividadEditComponent, ActividadListComponent]
})
export class ActividadModule { }
