import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, tap, catchError } from 'rxjs/operators';
import { WebSocketsService } from './web-sockets.service';
import { MessageModel } from '../models/message.model';
import { API_URL } from '../../config/api-url';
import { LpDialogsService } from 'lp-dialogs';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
    providedIn: 'root'
})
export class ChatService {

    messagesSource = new Subject<{message:MessageModel,order:string}>();
    messages$:Observable<{message:MessageModel,order:string}> = this.messagesSource.asObservable();

    constructor(private http:HttpClient, private wsService:WebSocketsService, private lpDialogsService:LpDialogsService, private errorHandlerService:ErrorHandlerService) {}

    getMessages(taskId: string, skip: number, limit: number = 10) {
        const headers = new HttpHeaders({skip:skip.toString(),limit:limit.toString()})
        const url = `${API_URL}messages/${taskId}`;
        return this.http.get(url,{headers}).pipe(
            map((res: any) => {
            return {
                count: res.data.count,
                messages: res.data.messages
            }
        }),
         catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR'); return this.errorHandlerService.handleError(err) })
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
        return this.http.post(url, formData).pipe(map((res:any)=>res.message)).pipe(
            catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR'); return this.errorHandlerService.handleError(err) })
        )
    }

    deleteMessage(messageId: string):Observable<any> {
        let url = `${API_URL}message/${messageId}`
        return this.http.delete(url).pipe(
            tap((res: any) => {this.messagesSource.next({message:res.message,order:'delete'})}),
            catchError((err) => { this.lpDialogsService.openInfoDialog(err.message, err.status, 'ERROR'); return this.errorHandlerService.handleError(err) })
        )
    } 

    listenningMessages(){
        return this.wsService.listen('message-in');
    }

}
