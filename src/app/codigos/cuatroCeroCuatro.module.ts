import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import {CuatroCeroCuatroComponent} from './404/cuatroCeroCuatro.component';


@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ],
  declarations: [CuatroCeroCuatroComponent],
  providers: []
})
export class CodigosModule { }