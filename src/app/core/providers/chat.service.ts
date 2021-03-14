import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { WebSocketsService } from './web-sockets.service';
import { MessageModel } from '../models/message.model';
import { API_URL } from '../../config/api-url';
@Injectable({
    providedIn: 'root'
})
export class ChatService {

    messagesSource = new Subject<{message:MessageModel,order:string}>();
    messages$:Observable<{message:MessageModel,order:string}> = this.messagesSource.asObservable();

    constructor(private http:HttpClient,
                private wsService:WebSocketsService) {}

    getMessages(taskId: string, skip: number, limit: number = 10) {
        const headers = new HttpHeaders({skip:skip.toString(),limit:limit.toString()});
        const url = `${API_URL}messages/${taskId}`;
        return this.http.get(url,{headers}).pipe(
            map((res: any) => {
                console.log({res});
            return {
                count: res.data.count,
                messages: res.data.messages
            }
        })
        )
    }
    postMessage(message: MessageModel,taskId:string) {
        message.date = new Date().getTime();
        const formData: FormData = new FormData();
        message.files.forEach((f,i)=>{
            formData.append(i, f, f.name);
        })
        Object.keys(message).forEach((k:string)=>{ k != 'files' ? formData.append(k,message[k]) : null});
        const url = `${API_URL}message/${taskId}`;
        return this.http.post(url, formData).pipe(
            map((res: any) => res.message)
        );
    }

    deleteMessage(messageId: string):Observable<any> {
        let url = `${API_URL}message/${messageId}`;
        return this.http.delete(url).pipe(
            tap((res: any) => { this.messagesSource.next({message:res.message,order:'delete'})})
        );
    } 

    listenningMessages(){
        return this.wsService.listen('message-in');
    }

}
