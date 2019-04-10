import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './chat.service';
import { ChatCreateComponent } from '../chat/chat-create/chat-create.component';
import { ChatDetailComponent } from '../chat/chat-detail/chat-detail.component';
import { ChatEditComponent } from '../chat/chat-edit/chat-edit.component';
import { ChatListComponent } from '../chat/chat-list/chat-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ChatCreateComponent,
    ChatDetailComponent,
    ChatEditComponent,
    ChatListComponent,

  ],
  providers: [ChatService]
})
export class ChatModule { }
