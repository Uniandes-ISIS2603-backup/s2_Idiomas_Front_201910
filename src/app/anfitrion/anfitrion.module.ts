import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnfitrionListComponent } from './anfitrion-list/anfitrion-list.component';
import { AnfitrionService } from './anfitrion.service';
import { AnfitrionDetailComponent } from './anfitrion-detail/anfitrion-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations: [AnfitrionListComponent, AnfitrionDetailComponent],
  providers: [AnfitrionService]
})
export class AnfitrionModule { }