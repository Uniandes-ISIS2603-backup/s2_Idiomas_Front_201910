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

import {ComentarioBlogListComponent } from '../comentario-blog/comentario-blog-list/comentario-blog-list.component';
import {ComentarioBlogDetailComponent } from '../comentario-blog/comentario-blog-detail/comentario-blog-detail.component';
import {ComentarioCreateComponent} from '../comentario-blog/comentario-create/comentario-create.component';

import { AppRoutingModule } from '../app-routing/app-routing.module';
import { ComentarioBlogService } from './comentario-blog.service';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [ComentarioBlogListComponent, ComentarioBlogDetailComponent, ComentarioCreateComponent],
  exports: [ComentarioBlogListComponent],
  providers: [ComentarioBlogService]
})
export class ComentarioBlogModule { }

