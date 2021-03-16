import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { AuthService } from './auth.service';
import { merge } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketsService {

  socketStatus:boolean

  constructor(private socket:Socket,private authService:AuthService) { }
  checkStatus() {
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socketStatus = true;
    });

    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
      this.socketStatus = false;
      merge(this.authService.onServerOfDisconnection(), this.authService.logout()).subscribe();
    });
  }
  emit(event: string, payload?: any, callback?: Function) {
    this.socket.emit(event, payload, callback);
  }

  listen(event: string) {
    return this.socket.fromEvent(event);
  }

}
