import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoordinadorListComponent } from './coordinador-list/coordinador-list.component';
import { CoordinadorDetailComponent } from './coordinador-detail/coordinador-detail.component';
import { CoordinadorService } from './coordinador.service';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,AppRoutingModule
    
  ],
  declarations: [CoordinadorListComponent, CoordinadorDetailComponent],
  providers: [CoordinadorService]
})
export class CoordinadorModule { }