import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import {  Message } from '../models/message.model';
import { map, tap} from 'rxjs/operators';
import { URL_SERVICES } from '../../config/config';
import { WebSocketsService } from './web-sockets.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    messagesSource = new Subject<{message:Message,order:string}>();
    messages$:Observable<{message:Message,order:string}> = this.messagesSource.asObservable();

    constructor(private http:HttpClient, private wsService:WebSocketsService) {}

    getMessages(taskId: string, skip: number, limit: number = 10) {
        let url = `${URL_SERVICES}messages/${taskId}?skip=${skip}&limit=${limit}`;
        return this.http.get(url).pipe(map((res: any) => {
            return {
                count: res.data.count,
                messages: res.data.messages
            }
        }))
    }
    postMessage(message: Message,taskId:string) {
        message.date = new Date().getTime();
        let formData: FormData = new FormData();
        message.files.forEach((f,i)=>{
            formData.append(i, f, f.name);
        })
         Object.keys(message).forEach((k:string)=>{ k != 'files' ? formData.append(k,message[k]) : null})
        let url = `${URL_SERVICES}message/${taskId}`
        return this.http.post(url, formData).pipe(map((res:any)=>res.message))
    }

    deleteMessage(messageId: string):Observable<any> {
        let url = `${URL_SERVICES}message/${messageId}`
        return this.http.delete(url).pipe(tap((res: any) => {
            this.messagesSource.next({message:res.message,order:'delete'})
        }))
    } 

    listenningMessages(){
        return this.wsService.listen('message-in')
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
