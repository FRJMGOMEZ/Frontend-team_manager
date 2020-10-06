import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICES } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messagesSavedSource = new Subject<{ message: Message, order: string }>();
  messagesSaved$: Observable<{ message: Message, order: string }> = this.messagesSavedSource.asObservable();

  constructor(private http: HttpClient) { }

  getMessagesSaved(projectId:string){
      let url = `${URL_SERVICES}messages-saved?projectId=${projectId}`
      return  this.http.get(url).pipe(map((res:any)=>{
        return res.messages;
      }))
  }

  
  saveMessage(messageId:string){
    let url = `${URL_SERVICES}save-message/${messageId}`;
      return this.http.put(url,{})
  }

  removeMessage(messageId:string){
    let url = `${URL_SERVICES}remove-message/${messageId}`;
    return this.http.put(url,{})
  }

  searchMessage(input: string, projectId:string) {
     let url = `${URL_SERVICES}search-message/${input}?projectId=${projectId}`
     return this.http.get(url).pipe(map((res:any)=>{ return res.messages}))
  }
}

