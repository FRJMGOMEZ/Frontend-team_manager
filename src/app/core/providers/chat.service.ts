import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap} from 'rxjs/operators';
import { WebSocketsService } from './web-sockets.service';
import { Message } from '../models/message.model';
import { API_URL } from '../../config/api-url';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    messagesSource = new Subject<{message:Message,order:string}>();
    messages$:Observable<{message:Message,order:string}> = this.messagesSource.asObservable();

    constructor(private http:HttpClient, private wsService:WebSocketsService) {}

    getMessages(taskId: string, skip: number, limit: number = 10) {
        const headers = new HttpHeaders({skip:skip.toString(),limit:limit.toString()})
        const url = `${API_URL}messages/${taskId}`;
        return this.http.get(url,{headers}).pipe(map((res: any) => {
            return {
                count: res.data.count,
                messages: res.data.messages
            }
        }))
    }
    postMessage(message: Message,taskId:string) {
        message.date = new Date().getTime();
        const formData: FormData = new FormData();
        message.files.forEach((f,i)=>{
            formData.append(i, f, f.name);
        })
         Object.keys(message).forEach((k:string)=>{ k != 'files' ? formData.append(k,message[k]) : null})
        const url = `${API_URL}message/${taskId}`
        return this.http.post(url, formData).pipe(map((res:any)=>res.message))
    }

    deleteMessage(messageId: string):Observable<any> {
        let url = `${API_URL}message/${messageId}`
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
