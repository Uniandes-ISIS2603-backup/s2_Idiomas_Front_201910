import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';
import { AdministradorService } from './administrador.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent],  
  providers: [AdministradorService]
})
export class AdministradorModule { }