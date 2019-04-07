/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ComentarioGrupoInteresListComponent } from './comentario-grupo-interes-list/comentario-grupo-interes-list.component';

import { AppRoutingModule } from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [ComentarioGrupoInteresListComponent],
  exports: [ComentarioGrupoInteresListComponent]
})
export class ComentarioGrupoInteresModule { }



