import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


const API_URL = environment.apiURL;
const chats = '/chat';

@Injectable()
export class ChatService {

  /**
   * Constructor del servicio
   * @param http The HttpClient - This is necessary in order to perform requests
   */
  constructor(private http: HttpClient) { }

  /**
    * Returns the Observable object containing the list of chats retrieved from the API
    * @returns The list of chats in real time
    */
   getChats(): Observable<Chat[]> {
    return this.http.get<Chat[]>(API_URL + chats);
}

/**
* Returns the Observable object with the details of an Chat retrieved from the API
* @returns The Chat details
*/
getChatDetail(chatId: number): Observable<ChatDetail> {
    return this.http.get<ChatDetail>(API_URL + chats + '/' + chatId);
}

/**
* Creates an Chat
* @param chat The new Chat
* @returns The confirmation that the Chat was created
*/
createChat(chat: Chat): Observable<Chat> {
    return this.http.post<Chat>(API_URL + chats, chat);
}

/**
* Updates an Chat
* @param Chat The Chat's information updated
* @returns The confirmation that the Chat was updated
*/
updateChat(chat: Chat): Observable<ChatDetail> {
    return this.http.put<ChatDetail>(API_URL + chats + '/' + chat.id, chat);
}

/**
* Deletes an Chat from the BookStore
* @param ChatId The id of the Chat
* @returns The confirmation that the Chat was deleted
*/
deleteChat(chatId: number): Observable<boolean> {
    return this.http.delete<boolean>(API_URL + chats + '/' + chatId);
}
}