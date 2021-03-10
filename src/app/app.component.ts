import { Component } from '@angular/core';
import { WebSocketsService } from './core/providers/web-sockets.service';
import { MediaService } from './core/providers/media.service';
import { AuthService } from './auth/shared/providers/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  desktop: boolean;
  constructor(private wsService: WebSocketsService, public mdService: MediaService){
    this.wsService.checkStatus();
  }
  title = 'cargomusicapp-front';

}
