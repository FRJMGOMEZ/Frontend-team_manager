import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { URL_SERVICES } from '../config/config';
import { HttpClient} from '@angular/common/http';
import {  Message } from '../models/message.model';
import { map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    messagesSource = new Subject<{message:Message,order:string}>();
    messages$:Observable<{message:Message,order:string}> = this.messagesSource.asObservable();

    constructor(private http:HttpClient) {}

    getMessages(projectId: string, from: number, limit: number = 15) {
        let url = `${URL_SERVICES}messages?projectId=${projectId}&from=${from}&limit=${limit}`;
        return this.http.get(url).pipe(map((res: any) => {
            return {
                count: res.count,
                messages: res.messages
            }
        }))
    }
    postMessage(message: Message) {
        let url = `${URL_SERVICES}message`
        return this.http.post(url, message).pipe(tap((res: any) => {
            this.messagesSource.next({message:res.message,order:'post'})
        }))
    }

    deleteMessage(messageId: string):Observable<any> {
        let url = `${URL_SERVICES}message/${messageId}`
        return this.http.delete(url).pipe(tap((res: any) => {
            this.messagesSource.next({message:res.message,order:'delete'})
        }))
    } 

   /*  

    */

    /* emitMessage(messageOrder:MessageOrder,projectId:string) {
        let payload = {messageOrder,room:projectId}
        this.socket.emit('message', payload)
    } */

   /*  messagesSocket() {
        return this.socket.fromEvent('message').pipe(map((messageOrder:MessageOrder)=>{
            this.messagesSource.next(messageOrder)
        }))  
    }  */

  
}
