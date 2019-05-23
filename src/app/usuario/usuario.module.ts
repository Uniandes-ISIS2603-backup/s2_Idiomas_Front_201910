import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioListComponent } from './usuario-list/usuario-list.component';
import { UsuarioService } from './usuario.service';
import { UsuarioDetailComponent } from './usuario-detail/usuario-detail.component';
import { UsuarioCreateComponent } from './usuario-create/usuario-create.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [UsuarioListComponent, UsuarioDetailComponent/*, UsuarioCreateComponent*/],
  providers: [UsuarioService]
})
export class UsuarioModule { }