import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorListComponent } from './administrador-list/administrador-list.component';
import { AdministradorDetailComponent } from './administrador-detail/administrador-detail.component';
import { AdministradorCreateComponent } from './administrador-create/administrador-create.component';
import {AdministradorEditComponent} from './administrador-edit/administrador-edit.component';
import { AdministradorService } from './administrador.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,AppRoutingModule, FormsModule
  ],
  declarations: [AdministradorListComponent, AdministradorDetailComponent, AdministradorCreateComponent, AdministradorEditComponent ],  
  providers: [AdministradorService]
})
export class AdministradorModule { }