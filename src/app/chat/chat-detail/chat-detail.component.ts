import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChatService } from '../chat.service';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-detail',
  templateUrl: './chat-detail.component.html',
  styleUrls: ['./chat-detail.component.css']
})
export class ChatDetailComponent implements OnInit {
  
  /**
  * The chat
  */
  @Input() chatDetail: Chat;
  /**
  * Constructor for the component
  * @param route The route which helps to retrieves the id of the book to be shown
  * @param chatService The chat's services provider
  * @param toastrService The toastr to show messages to the user
  */
  constructor(
    private route: ActivatedRoute,
    private chatService: ChatService 
    ) { }
    
    
    
    
    /**
    * El id del chat que viene en el path get .../chats/chat_id
    */
    chat_id: number;
    /**
    * The method which obtains the chat whose details we want to show
    */
    getChatDetail(): void {
      this.chatService.getChatDetail(this.chat_id)
      .subscribe(chatDetail => {
        this.chatDetail = chatDetail
      });
    }
    
    
    /**
    * The method which initializes the component.
    * We need to create the chat so it is never considered as undefined
    */
    ngOnInit() {
      this.chat_id = +this.route.snapshot.paramMap.get('id');
      if (this.chat_id){
        this.chatDetail = new Chat();
        this.getChatDetail();
      }
    }
  }