import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorListComponent } from './coordinador-list/coordinador-list.component';
import { CoordinadorDetailComponent } from './coordinador-detail/coordinador-detail.component';
import { CoordinadorService } from './coordinador.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {CoordinadorCreateComponent} from './coordinadro-create/coordinador-create.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule, FormsModule
    
  ],
  declarations: [CoordinadorListComponent, CoordinadorDetailComponent, CoordinadorCreateComponent],
  providers: [CoordinadorService]
})
export class CoordinadorModule { }