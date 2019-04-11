import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ChatService } from '../chat.service';
import { DatePipe } from '@angular/common';
import { ToastrService } from 'ngx-toastr';
import { Chat } from '../chat';

@Component({
  selector: 'app-chat-edit',
  templateUrl: './chat-edit.component.html',
  styleUrls: ['./chat-edit.component.css'],
  providers: [DatePipe]
})
export class ChatEditComponent implements OnInit {

  /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param chatService The chats' services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private chatService: ChatService,
        private toastrService: ToastrService,
    ) {}

    /**
    * The chat id as received from the parent component
    */
    @Input() chat: Chat;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an chat
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new chat
    */
    @Output() update = new EventEmitter();

    /**
    * Updates the information of the chat
    */
    editChat(): void {
        let dateB: Date = new Date(this.chat.fecha.year, this.chat.fecha.month - 1, this.chat.fecha.day);
        this.chat.fecha = dateB;
        this.chatService.updateChat(this.chat)
            .subscribe(() => {
                this.toastrService.success("The chat's information was updated", "Chat edition");
            });
        this.update.emit();
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelEdition(): void {
        this.cancel.emit();
    }


    /**
    * This function will initialize the component
    */
    ngOnInit() {
        if (this.chat && this.chat.fecha) {
            this.chat.fecha = this.chat.fecha.substring(0, 10);
            var date = {
                day: + this.chat.fecha.split('-')[2],
                month: + this.chat.fecha.split('-')[1],
                year: + this.chat.fecha.split('-')[0]
            };
            this.chat.fecha = date;
        }
    }

    /**
    * This function will be called when the user chooses another chat to edit
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}