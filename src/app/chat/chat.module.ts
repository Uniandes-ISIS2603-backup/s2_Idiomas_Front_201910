import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatCreateComponent } from './chat-create/chat-create.component';
import { ChatDetailComponent } from './chat-detail/chat-detail.component';
import { ChatEditComponent } from './chat-edit/chat-edit.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPermissionsModule } from 'ngx-permissions';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChatService } from './chat.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    ],
  providers: [ChatService]
})
export class ChatModule { }
