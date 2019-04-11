import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnfitrionListComponent } from './anfitrion-list/anfitrion-list.component';
import { AnfitrionService } from './anfitrion.service';
import { AnfitrionDetailComponent } from './anfitrion-detail/anfitrion-detail.component';
import { AnfitrionCreateComponent } from './anfitrion-create/anfitrion-create.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,    
    FormsModule
  ],
  declarations: [AnfitrionListComponent, AnfitrionDetailComponent, AnfitrionCreateComponent],
  providers: [AnfitrionService]
})
export class AnfitrionModule { }