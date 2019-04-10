import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-chat-create',
  templateUrl: './chat-create.component.html',
  styleUrls: ['./chat-create.component.css'],
  providers: [DatePipe]
})
export class ChatCreateComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param chatService The chat's services provider
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private dp: DatePipe,
    private chatService: ChatService,
    private toastrService: ToastrService,
) {}

/**
* The new chat
*/
chat: Chat;

/**
* The output which tells the parent component
* that the user no longer wants to create an chat
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user created a new chat
*/
@Output() create = new EventEmitter();

/**
* Creates an chat
*/
createChat(): Chat {

    let dateB: Date = new Date(this.chat.fecha.year, this.chat.fecha.month - 1, this.chat.fecha.day);

    this.chat.fecha = dateB;
    console.log(this.chat);
    this.chatService.createChat(this.chat)
        .subscribe((chat) => {
            this.chat = chat;
            this.create.emit();
            this.toastrService.success("The chat was created", "Chat creation");

        });
    return this.chat;
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelCreation(): void {
    this.cancel.emit();
}

/**
* This function will initialize the component
*/
ngOnInit() {
    this.chat = new Chat();
}

}
