import { Component } from '@angular/core';
import { WebSocketsService } from './core/providers/web-sockets.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desktop: boolean;
  constructor(private wsService: WebSocketsService){
    this.wsService.checkStatus();
  }
  title = 'cargomusicapp-front';

}
